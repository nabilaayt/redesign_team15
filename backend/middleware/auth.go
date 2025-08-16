package middlewares

import (
	"team15gdg/database"
	"team15gdg/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

func Auth(c *fiber.Ctx) error {
	var admin models.Admin
	cookieToken := c.Cookies("admin_token")
	if err := database.DB.Where("token =? AND token_exp >= ?", cookieToken, time.Now()).First(&admin).Error;err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Token is invalid",
		})
	}
	return c.Next()
}