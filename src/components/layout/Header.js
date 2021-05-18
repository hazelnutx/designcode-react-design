import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import { MenuButton } from "../buttons/MenuButton"
import { MenuTooltip } from "../../tooltips/MenuTooltip"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" />
      </Link>
      <MenuWrapper>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton item={item} key={index} onClick={e => handleClick(e)} />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${menuData.length}, auto);
`
