import { z } from "zod";

// schema for training a model or creating a new model
export const TrainModel = z.object({
  name: z.string(),
  type: z.enum(["Man", "Women", "Others"]),
  age: z.number(),
  ethinicity: z.enum([
    "White",
    "Black",
    "South Asian (Indian)",
    "Asian American",
    "East Asian (Chinese, Janapese, Korean)",
    "South East Asian (Thai Indonesian)",
    "Middle Eastern (Arabic)",
    "Pacific (Polynesian)",
    "Hispanic",
  ]),
  eyeColor: z.enum(["Brown", "Blue", "Hazel", "Gray"]),
  bald: z.boolean(),
  images:z.array(z.string()) //array of strings
});



//schema for generate image 
export const GenerateImage = z.object({
    prompt: z.string(),
    modelId : z.string(),
    num:z.number() //like how many images does user wants to create
})


//schema for generate image from premade packs (prompts)
export const GenerateImagesFromPack = z.object({
    modelId : z.string(),
    packId : z.string()
})