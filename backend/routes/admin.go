package routes

import (
	"team15gdg/controllers"
	"team15gdg/middleware"

	"github.com/gofiber/fiber/v2"
)

func AdminRoutes(api fiber.Router) {
	admin := api.Group("/admin")
	admin.Post("/signup", controllers.SignUp)
	admin.Post("/login", controllers.Login)
	admin.Post("/logout", middleware.Auth, controllers.Logout)
	admin.Post("/sync-berita", middleware.Auth, controllers.SyncBeritaCache)
}