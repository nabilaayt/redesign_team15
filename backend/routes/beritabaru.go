package routes

import (
	"team15gdg/controllers"

	"github.com/gofiber/fiber/v2"
)

func BeritaRoutes(api fiber.Router) {
	berita := api.Group("/berita")
	berita.Post("/", controllers.CreateBeritaBaru)
}
