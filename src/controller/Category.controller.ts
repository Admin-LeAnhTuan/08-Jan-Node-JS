import { Request, Response } from "express";
import Category from './../model/Category.model';

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newCategory = new Category(data);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Get all Category 
export const getAllCategory = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find({ isdelete: false })
        .sort({ order: 1 }) // Sắp xếp theo trường "order" tăng dần (1) hoặc giảm dần (-1)
        .exec();
  
      if (categories.length > 0) {
        res.json(categories);
      } else {
        res.status(404).json({ error: "No categories found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to get categories" });
    }
  };


// Get Category by ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id).exec();
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
};

// Update Category by ID
export const updateCategoryById = async (req: Request, res: Response) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      ).exec();
      if (updatedCategory) {
        res.json(updatedCategory);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  };

// Delete user by ID
export const deleteCategoryById = async (req: Request, res: Response) => {
    try {
      const deletedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        { isdelete: true },
        { new: true } // Thêm option { new: true } để trả về sản phẩm đã được cập nhật
      ).exec();
      
      if (deletedCategory) {
        res.json(deletedCategory);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };

module.exports = {
    createCategory,
    getAllCategory, 
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
}