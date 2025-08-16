package routes

import (
	"team15gdg/controllers"
	"team15gdg/middleware"

	"github.com/gofiber/fiber/v2"
)

func BeritaRoutes(api fiber.Router) {
	berita := api.Group("/berita")
	berita.Post("/", middleware.Auth, controllers.CreateBeritaBaru)
	berita.Get("/", controllers.GetBeritaBaru)
	berita.Patch("/:id", middleware.Auth, controllers.UpdateBeritaBaru)     
	berita.Delete("/:id", middleware.Auth, controllers.DeleteBeritaBaru) 
}

