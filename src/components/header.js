/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Flex, Link } from "ui"
import Section from "../components/Section"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <Section py={4}>
    <Flex sx={{ justifyContent: "center" }}>
      <Link to="/" sx={{ display: "block", width: "40%", minWidth: "14rem" }}>
        <img src={Logo} sx={{ width: "100%" }} />
      </Link>
    </Flex>
  </Section>
)

export default Header
