using System;
using System.Collections;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DiceRoller.Domain
{
    public class Dice
    {
        [JsonPropertyName("MaximumResult")]
        public string MaximumResult { get; set; }
        public string GetDiceName => $"D-{MaximumResult}";
        internal string Roll()
        {
            var random = 
                new Random();

            var rollResult = 
                random
                    .Next(
                        1, 
                        int.Parse(MaximumResult));

            return
                $"{rollResult}";
        }
    }

    public class RollResult
    {
        private Dice dice;

        public RollResult(
            Dice dice)
        {
            this.dice = dice;
        }

        [JsonPropertyName("Result")]
        public string Result { get; private set; }
        [JsonPropertyName("DiceName")]
        public string DiceName { get; private set; }

        internal void GetResult()
        {
            Result = dice.Roll();
            DiceName = dice.GetDiceName;
        }
    }

    public static class DiceExtensions
    {
        public static IEnumerable<RollResult> Roll(
            this IEnumerable<Dice> diceToRoll)
        {
            var diceResults =
                new List<RollResult>();

            foreach (var dice in diceToRoll)
            {
                var rollResult =
                    new RollResult(
                        dice);
                
                rollResult
                    .GetResult();

                diceResults
                    .Add(
                        rollResult);
            }

            return
                diceResults;
        }
    }
}
