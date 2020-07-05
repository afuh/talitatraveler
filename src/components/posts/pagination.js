import React from 'react'
import { Pagination as _Pagination } from 'antd'
import styled, { css } from 'styled-components'
import localePagination from 'rc-pagination/es/locale/es_ES'

import 'antd/lib/pagination/style/index.css'

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.spacing._40} 0;
  `}
`

const SPagination = styled(_Pagination)`
  ${({ theme }) => css`
    .ant-pagination {
      &-item {
        border-radius: initial;
        border: initial;
        background: ${theme.lightGray};

        a {
          color: ${theme.gray};
          height: 100%;
          font-weight: bold;
        }

        &:hover,
        &:focus {
          text-decoration: none;
          box-shadow: ${theme.shadow};
          background: ${theme.mainColor};

          a {
            color: #fff;
          }
        }
      }

      &-prev,
      &-next {
        button {
          border: initial;
          border-radius: initial;
          cursor: pointer;

          svg {
            width: ${theme.spacing._16};
            height: ${theme.spacing._16};
          }

          &:hover {
            border-color: ${theme.mainColor};
            color: ${theme.mainColor};
          }
        }
      }

      &-disabled {
        button:hover {
          color: #00000040;
        }
      }

      &-item-active {
        background: ${theme.mainColor};

        a {
          color: ${theme.white};
        }
      }

      &-jump-prev,
      &-jump-next {
        .anticon,
        .anticon:hover {
          color: ${theme.mainColor};
        }
      }
    }
  `}
`

const Pagination = ({ ...props }) => (
  <Wrapper>
    <SPagination {...props} locale={localePagination} />
  </Wrapper>
)

export default Pagination
