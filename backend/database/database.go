package database

import (
	"fmt"
	"os"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"team15gdg/models"
)

var DB *gorm.DB

func DBinit() {
  	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
	os.Getenv("DB_USER"),
	os.Getenv("DB_PASS"),
	os.Getenv("DB_HOST"),
	os.Getenv("DB_PORT"),
	os.Getenv("DB_NAME"),
)
  	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	fmt.Println("Database connection success")
	DB = db
}

func DBMigrate() {
	if err := DB.AutoMigrate(&models.BeritaBaru{}); 
	err != nil {
		fmt.Println("Failed to migrate", err)
	}

	fmt.Println("Database migration success")
}