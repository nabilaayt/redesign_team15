package routes

import (
	"team15gdg/controllers"
	"team15gdg/middleware"

	"github.com/gofiber/fiber/v2"
)

func fileRoutes(api fiber.Router) {
	file := api.Group("/file")
	file.Post("/", middleware.Auth, controllers.CreateFile)
	file.Get("/", controllers.GetFile)
	file.Patch("/:id", middleware.Auth, controllers.UpdateFile)
}