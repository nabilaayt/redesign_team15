package controllers

import (
	"team15gdg/database"
	"team15gdg/models"
	"team15gdg/utils"

	"github.com/gofiber/fiber/v2"
)

func CreateBeritaBaru(c *fiber.Ctx) error {
	var BeritaNew models.BeritaBaru

	cover, err := utils.SaveFile(c, "cover", true)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error":"Failed to save cover image",
		})
	}

	tema := c.FormValue("tema")
	judul := c.FormValue("judul")

	BeritaNew.Cover = cover
	BeritaNew.Tema = tema
	BeritaNew.Judul = judul

	if err := database.DB.Create(&BeritaNew).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to create new Berita",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"message": "Succes to create new Berita",
		})
}
