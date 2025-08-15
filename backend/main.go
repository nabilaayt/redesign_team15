package main

import (
	"team15gdg/config"
	"team15gdg/database"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config.InitEnv()
	database.DBinit()
	database.DBMigrate()
	
	app := fiber.New()

	app.Listen(":8080")
}