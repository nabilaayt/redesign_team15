package models

import "gorm.io/gorm"

type BeritaBaru struct {
	gorm.Model
	Cover		string `json:"cover" gorm:"not null"`
 	Tema      	string `json:"tema" gorm:"not null"`
	Judul       string `json:"judul" gorm:"not null"`
}