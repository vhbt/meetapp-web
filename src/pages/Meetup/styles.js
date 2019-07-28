import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 40px auto;
  padding: 20px;

  color: #fb617f;

  ${props =>
    props.loading === 1 &&
    css`
      div {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 200px;
        margin: auto;
      }
    `}

  .main-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
      display: flex;

      button {
        display: flex;
        align-items: center;
        margin: 5px 0;
        padding: 10px;
        width: 120px;
        justify-content: center;
        border: 0;
        border-radius: 4px;
        background: #4680ff;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.04, '#4680ff')};
        }

        & + button {
          margin-left: 15px;
          background: #fb617f;

          &:hover {
            background: ${darken(0.04, '#fb617f')};
          }
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }

  .meetup-body {
    display: flex;
    flex-direction: column;

    height: 100%;
    background: #fff;
    color: #222;
    top: 320px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);

    padding: 15px;

    hr {
      margin-top: 20px;
      width: 100%;
      height: 1px;
      border: 0;
      color: rgba(0, 0, 0, 0.1);
      background: rgba(0, 0, 0, 0.1);
    }

    p {
      margin-top: 15px;
      line-height: 24px;
      width: 100%;
      flex: 1;
    }

    footer {
      width: 100%;
      flex: 1;
      margin-top: 20px;
      opacity: 0.6;

      svg {
        margin-right: 5px;
      }

      time {
        display: flex;
        align-items: center;
        font-size: 16px;
      }

      address {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-style: normal;
      }
    }
  }

  .banner {
    background: #fff;
    margin-top: 15px;
    width: 100%;
    height: 300px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
`;

export const Subscriptions = styled.div`
  margin-top: 15px;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);

  h3 {
    padding: 15px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .subscriptions-box {
    display: inline-flex;
    align-items: center;
    padding: 15px 10px;

    .subbed-user {
      max-width: 80px;

      & + .subbed-user {
        margin-left: 5px;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 5px;
      }
    }

    .empty-subscriptions {
      color: #666;
      margin: 5px;
    }
  }
`;
