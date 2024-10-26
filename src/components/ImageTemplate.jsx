import React from 'react'
import styled from 'styled-components'

const ImageTemplate = ({image,styling}) => {
  return (
        // <img src={image} alt="" style={styling} />
        <SectionImage src={image} style={styling}></SectionImage>
  )
}

export default ImageTemplate

const SectionImage = styled.img`
    @media (max-width: 800px) {
        max-width: 350px;
    }
`
// const SectionImage = styled.img`
//   width: ${(props) => props.styling.width || '100%'};
//   height: ${(props) => props.styling.height || 'auto'};
//   border-radius: ${(props) => props.styling.borderRadius || '0px'};
//   border: ${(props) => props.styling.border || 'none'};
// `;

// const SectionImage = styled.img.attrs({
//     src: ''
// })`
//     src: '';
//     width: 100px;
//     height: 100px;
//     border: 1px solid blue;
// `
