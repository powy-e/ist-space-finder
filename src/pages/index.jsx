import { graphql } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import LoadingBar from "../components/LoadingBar"
import Searchbar from "../components/Searchbar"
import SpacesList from "../components/SpacesList"

export default function Home({ data }) {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  return (
    <Layout>
      <Searchbar setSearch={setSearch} />
      <ProTip>
        <strong>Pro tip:</strong> Click on an entry to see its blueprint
      </ProTip>
      <LoadingBar loading={loading} />
      <SpacesList
        search={search}
        setLoading={setLoading}
        spaces={data.allSpace.edges}
      />
      <div id="modal-portal" />
    </Layout>
  )
}

const ProTip = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`

export const query = graphql`
  query homePageQuery {
    allSpace(filter: { name: { ne: "" } }) {
      edges {
        node {
          id
          istId
          name
          type
          path
        }
      }
    }
  }
`
