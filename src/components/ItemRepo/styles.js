const { styled } = require("styled-components");

export const ItemRepoContainer = styled.div`
    width: 80%;
    
    h3{
        font-size: 32px;
        color: #FAFAFA;
        text-transform: capitalize;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a.remove{
        color: #FF90D0;
        margin-top: 20px;
    }

    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }
`