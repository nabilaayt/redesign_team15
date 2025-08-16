package models

import "gorm.io/gorm"

type File struct {
	gorm.Model
	NamaFile string `json:"nama_file" gorm:"not null"`
	FilePath string `json:"file"`
}