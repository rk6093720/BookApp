import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBook, getBook } from "../Redux/action";

const AddBook = () => {
      const [formData, setFormData] = useState({
    title: "",
    genre: "",
    publishedYear: "",
    author: "",
    status: "",
    imagebook: "",
  });
  const { title, genre, publishedYear, author, status,imagebook } = formData;

  const [errors, setErrors] = useState({});
  const Book = useSelector((state)=> state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validate = () => {
    let tempErrors = {};

    // if (!formData.id) tempErrors.id = "ID is required";
    if (!formData.title) tempErrors.title = "Title is required";
    if (!formData.genre) tempErrors.genre = "Genre is required";
    if (!formData.publishedYear) {
      tempErrors.publishedYear = "Published Year is required";
    } else if (!/^\d{4}$/.test(formData.publishedYear)) {
      tempErrors.publishedYear = "Enter a valid year (e.g. 2023)";
    }
    if (!formData.author) tempErrors.author = "Author is required";
    if (!formData.status) tempErrors.status = "Status is required";
    if (!formData.imagebook) {
      tempErrors.imagebook = "Image URL is required";
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp)$/.test(formData.imagebook)) {
      tempErrors.imagebook = "Enter a valid image URL (jpg/png/webp)";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const payload = {
        title,
        genre,
        publishedYear,
        author,
        status,
        imagebook,
      };
    if (validate()) {
      alert("✅ Form submitted successfully!");
      dispatch(createBook( payload))
      .then(()=> dispatch(getBook()))
      .then((r)=>{
        navigate("/")
      })
    }
  };
// console.log("id",id);
useEffect(()=>{
if(Book?.length === 0){
  dispatch(getBook())
}
},[Book?.length, dispatch])

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        maxWidth: 800,
        mx: "auto",
        mt: 4,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "#fff",
      }}
    >
      <Typography variant="h5" mb={2} textAlign="center">
        📚 Add Book Form
      </Typography>

      <Box container spacing={2}>
        {/* ID
        <Grid item xs={12} sm={6}>
          <TextField
            label="Book ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
            fullWidth
            error={!!errors.id}
            helperText={errors.id}
          />
        </Grid> */}

        {/* Title */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            error={!!errors.title}
            helperText={errors.title}
          />
        </Grid>

        {/* Genre */}
        <Grid item mt={2} xs={12} sm={6}>
          <TextField
            label="Genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            fullWidth
            error={!!errors.genre}
            helperText={errors.genre}
          />
        </Grid>

        {/* Published Year */}
        <Grid item mt={2} xs={12} sm={6}>
          <TextField
            label="Published Year"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            fullWidth
            error={!!errors.publishedYear}
            helperText={errors.publishedYear}
          />
        </Grid>

        {/* Author */}
        <Grid item mt={2} xs={12} sm={6}>
          <TextField
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            fullWidth
            error={!!errors.author}
            helperText={errors.author}
          />
        </Grid>

        {/* Status */}
        <Grid item mt={2} xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.status}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Unavailable">Unavailable</MenuItem>
              <MenuItem value="Reserved">Reserved</MenuItem>
            </Select>
            <FormHelperText>{errors.status}</FormHelperText>
          </FormControl>
        </Grid>

        {/* Image URL */}
        <Grid item mt={2} xs={12}>
          <TextField
            label="Image URL"
            name="imagebook"
            value={formData.imagebook}
            onChange={handleChange}
            fullWidth
            error={!!errors.imagebook}
            helperText={errors.imagebook}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item mt={2} xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddBook;



