using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using SignalRChat.Hubs;
using System;
using Microsoft.EntityFrameworkCore;
using DiceRoller.Data;
using DiceRoller.Models;

namespace SignalR
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddRazorPages();

            services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
            {
                builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials()
                    .WithOrigins("http://localhost:4200");
            }));

            services
                .AddSignalR(hubOptions =>
                {
                    hubOptions.EnableDetailedErrors = true;
                    hubOptions.KeepAliveInterval = TimeSpan.FromMinutes(1);
                })
                .AddJsonProtocol(options =>
                {
                    options.PayloadSerializerOptions.PropertyNamingPolicy = null;
                });

            services.AddMvcCore()
                .AddApiExplorer();

            services.AddSwaggerGen(c =>
                c.SwaggerDoc(
                    "v1",
                    new OpenApiInfo
                    {
                        Title = "Dice Roller",
                        Version = "v1"
                    }
                )
            );

            services.AddDbContext<DiceRollerContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("DiceRollerContext")));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapHub<RollHub>("/rollhub");
                endpoints.MapHub<BroadcastHub>("/broadcast");
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Dice Roller V1");
            });
        }
    }
}
