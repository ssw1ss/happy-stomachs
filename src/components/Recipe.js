/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Box, Card, Flex, Heading, Text } from "ui"
import Section from "./Section"

const recipeCardSx = {
  position: "relative",
  transform: theme => `translateY(calc((${theme.spaces[5]} + 2rem) * -1))`,
  "&:before": {
    content: "'- RECIPE -'",
    fontSize: 4,
    color: "midGreen",
    fontWeight: "bold",
    letterSpacing: "2px",
    position: "absolute",
    bottom: "100%",
    left: "0",
    textAlign: "center",
    width: "100%",
  },
}

const componentMap = {
  recipe_title: text => (
    <Heading as="h2" variant="h2">
      {text}
    </Heading>
  ),
  serves: text => <Text variant="label">🍲Serves: {text}</Text>,
  prep_time: text => <Text variant="label">👨‍🍳Prep: {text}</Text>,
  cook_time: text => <Text variant="label">🍳Cook: {text}</Text>,
  total_time: text => <Text variant="label">⏱Total: {text}</Text>,
  ingredients: html => <Text dangerouslySetInnerHTML={{ __html: html }} />,
  instructions: html => <Text dangerouslySetInnerHTML={{ __html: html }} />,
}
const generateRecipe = recipe => {
  const test = Object.entries(recipe).reduce((a, [key, val]) => {
    const content = Object.entries(val)[0][1]
    let hasComponent = componentMap[key]
    if (hasComponent) {
      let component = hasComponent(content)
      return { ...a, [key]: component }
    } else {
      return a
    }
  }, recipe)
  return test
}

const Recipe = ({ recipe, ...props }) => {
  const recipeObj = generateRecipe(recipe)
  const {
    recipe_title,
    serves,
    prep_time,
    cook_time,
    total_time,
    ingredients,
    instructions,
  } = recipeObj
  return (
    <Section id="recipe" bg="lightGreen" sx={{ mt: 7 }} {...props}>
      <Card sx={recipeCardSx}>
        {recipe_title}
        <Flex sx={{ flexWrap: "wrap", my: 2 }}>
          <Box mr={3}>{serves}</Box>
          <Box mr={3}>{prep_time}</Box>
          <Box mr={3}>{cook_time}</Box>
          <Box mr={3}>{total_time}</Box>
        </Flex>
        <Box>
          <Box mt={4}>
            <Heading as="h4" variant="h4">
              Ingredients
            </Heading>
            {ingredients}
          </Box>
          <Box mt={4}>
            <Heading as="h4" variant="h4">
              Instructions
            </Heading>
            {instructions}
          </Box>
        </Box>
      </Card>
    </Section>
  )
}

export default Recipe
