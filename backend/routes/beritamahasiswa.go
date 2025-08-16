package routes

import (
	"team15gdg/controllers"
	"team15gdg/middleware"

	"github.com/gofiber/fiber/v2"
)

func BeritaMahasiswaRoutes(api fiber.Router) {
	berita := api.Group("/beritaMahasiswa")
	berita.Post("/", middleware.Auth, controllers.CreateBeritaMahasiswa)
	berita.Get("/", controllers.GetBeritaMahasiswa)
	berita.Patch("/:id", middleware.Auth, controllers.UpdateBeritaMahasiwa)     
	berita.Delete("/:id", middleware.Auth, controllers.DeleteBeritaMahasiswa) 
}

