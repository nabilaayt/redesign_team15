package main

import (
	"team15gdg/config"
	"team15gdg/database"
	"team15gdg/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config.InitEnv()
	database.DBinit()
	database.DBMigrate()

	app := fiber.New()
	app.Static("/assets", "./assets")
	
	routes.MainRoutes(app)

	app.Listen(":8080")
}