import styled from 'vue-styled-components'

export const AutoGrid = styled.div`
  display: grid;
  padding: 1rem;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`
export const FlexLayout = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 1rem;
  flex-wrap: wrap;
  align-item: center;
  align-content: center;
  justify-content: center;
`
export const FlexItem = styled.div`
  margin: 0.5rem;
  flex: 0 0 auto;
`
