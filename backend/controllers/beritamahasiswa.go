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

func CreateBeritaMahasiswa(c *fiber.Ctx) error {
	var BeritaNewMahasiswa models.BeritaMahasiswa

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
		BeritaNewMahasiswa.PostedAt = t
	}

	tema := c.FormValue("tema")
	judul := c.FormValue("judul")

	BeritaNewMahasiswa.Cover = cover
	BeritaNewMahasiswa.Tema = tema
	BeritaNewMahasiswa.Judul = judul

	if err := database.DB.Create(&BeritaNewMahasiswa).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to create Berita Mahasiswa",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Succes to create Berita Mahasiswa",
	})
}

func GetBeritaMahasiswa(c *fiber.Ctx) error {
	var BeritaNewMahasiswa []models.BeritaMahasiswa

	limit := c.Query("limit")
	query := database.DB.Model(&models.BeritaMahasiswa{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")
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

	if err := query.Find(&BeritaNewMahasiswa).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to get Berita Mahasiswa",
		})
	}

	cache.SetBeritaCache(cacheKey, BeritaNewMahasiswa)

	return c.Status(200).JSON(fiber.Map{
		"berita": BeritaNewMahasiswa,
		"cache":  false,
	})
}

func UpdateBeritaMahasiwa(c *fiber.Ctx) error {
	id := c.Params("id")
	var BeritaNewMahasiswa models.BeritaMahasiswa

	if err := database.DB.First(&BeritaNewMahasiswa, id).Error; err != nil {
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
		BeritaNewMahasiswa.Cover = cover
	}

	if tema := c.FormValue("tema"); tema != "" {
		BeritaNewMahasiswa.Tema = tema
	}

	if judul := c.FormValue("judul"); judul != "" {
		BeritaNewMahasiswa.Judul = judul
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339Nano, postedAtStr)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339Nano)",
			})
		}
		BeritaNewMahasiswa.PostedAt = t
	}

	if err := database.DB.Save(&BeritaNewMahasiswa).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to update Berita",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Berita updated successfully",
		"berita":  BeritaNewMahasiswa,
	})
}

func DeleteBeritaMahasiswa(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID berita is required",
		})
	}
	var BeritaNewMahasiswa models.BeritaMahasiswa

	if err := database.DB.First(&BeritaNewMahasiswa, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if err := database.DB.Delete(&BeritaNewMahasiswa).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to delete Berita",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "Berita deleted successfully",
	})
}
