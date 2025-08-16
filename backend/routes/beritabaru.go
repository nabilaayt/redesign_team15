package routes

import (
	"team15gdg/controllers"

	"github.com/gofiber/fiber/v2"
)

func BeritaRoutes(api fiber.Router) {
	berita := api.Group("/berita")
	berita.Post("/", controllers.CreateBeritaBaru)
	berita.Get("/", controllers.GetBeritaBaru)
	berita.Patch("/:id", controllers.UpdateBeritaBaru)     
	berita.Delete("/:id", controllers.DeleteBeritaBaru) 
}

