package controllers

import (
	"strconv"
	"team15gdg/cache"
	"team15gdg/database"
	"team15gdg/models"
	"team15gdg/utils"
	"time"

	"github.com/gofiber/fiber/v2"
)

func CreateBeritaBaru(c *fiber.Ctx) error {
	var BeritaNew models.BeritaBaru

	cover, err := utils.SaveFile(c, "cover", true)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Failed to save cover image",
		})
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339Nano, postedAtStr)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339Nano)",
			})
		}
		BeritaNew.PostedAt = t
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

func GetBeritaBaru(c *fiber.Ctx) error {
	var BeritaNew []models.BeritaBaru

	limit := c.Query("limit")
	query := database.DB.Model(&models.BeritaBaru{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")
	cacheKey := "berita_all"

	if cached, found := cache.GetBeritaCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"berita": cached,
			"cache":  true,
		})
	}

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&BeritaNew).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to get new Berita",
		})
	}

	cache.SetBeritaCache(cacheKey, BeritaNew)

	return c.Status(200).JSON(fiber.Map{
		"berita": BeritaNew,
		"cache":  false,
	})
}

func UpdateBeritaBaru(c *fiber.Ctx) error {
	id := c.Params("id")
	var BeritaNew models.BeritaBaru

	if err := database.DB.First(&BeritaNew, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if _, err := c.FormFile("cover"); err == nil {
		cover, err := utils.SaveFile(c, "cover", true)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Failed to Update cover image",
			})
		}
		BeritaNew.Cover = cover
	}

	if tema := c.FormValue("tema"); tema != "" {
		BeritaNew.Tema = tema
	}

	if judul := c.FormValue("judul"); judul != "" {
		BeritaNew.Judul = judul
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339Nano, postedAtStr)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339Nano)",
			})
		}
		BeritaNew.PostedAt = t
	}

	if err := database.DB.Save(&BeritaNew).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to update Berita",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Berita updated successfully",
		"berita":  BeritaNew,
	})
}

func DeleteBeritaBaru(c *fiber.Ctx) error {
	id := c.Params("id")
	var BeritaNew models.BeritaBaru

	if err := database.DB.First(&BeritaNew, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if err := database.DB.Delete(&BeritaNew).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to delete Berita",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Berita deleted successfully",
	})
}
