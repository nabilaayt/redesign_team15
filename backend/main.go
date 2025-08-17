package main

import (
	"team15gdg/config"
	"team15gdg/database"
	"team15gdg/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	config.InitEnv()
	database.DBinit()
	database.DBMigrate()

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173", // asal request frontend
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	app.Static("/assets", "./assets")

	routes.MainRoutes(app)

	app.Listen(":8080")
}
