package controllers

import (
	"team15gdg/database"
	"team15gdg/models"
	"team15gdg/utils"

	"github.com/gofiber/fiber/v2"
)

func CreateFile(c *fiber.Ctx) error {
	var file models.File
	namafile := c.FormValue("namefile")
	filePath, err := utils.SaveFile(c, "file", false)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err,
		})
	}

	if namafile == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "namefile is required",
		})
	}

	file.NamaFile = namafile
	file.FilePath = filePath

	if err := database.DB.Create(&file).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save file",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "File created successfully",
		"file":    file,
	})
}

func GetFile(c *fiber.Ctx) error {
	var file []models.File

	if err := database.DB.Find(&file).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to get File",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"file": file,
	})
}

func UpdateFile(c *fiber.Ctx) error {
	id := c.Params("id")
	var file models.File

	if err := database.DB.First(&file, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "File not found",
		})
	}

	filePath, err := utils.SaveFile(c, "file", false)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err,
		})
	}

	file.NamaFile = c.FormValue("namefile")
	file.FilePath = filePath

	if err := database.DB.Save(&file).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update file",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "File updated successfully",
	})
}
