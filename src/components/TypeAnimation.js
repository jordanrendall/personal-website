import React, { Component } from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* grid-template-columns: 1fr; */
  /* justify-content: center; */

  p {
    text-align: center;
  }
`;

class TypeAnimation extends Component {
  state = {
    typing: true,
  };
  doneTyping = () => {
    if (this.props.repeat) {
      this.setState({ typing: false }, () => {
        this.setState({ typing: true });
      });
    }
  };
  render() {
    return this.state.typing ? (
      <Styles>
        {' '}
        <Typist
          cursor={{
            show: false,
          }}
          onTypingDone={this.doneTyping}
          avgTypingDelay={100}
          stdTypingDelay={50}
          startDelay={this.props.startDelay}
        >
          {this.props.textArray.map((text, i) => {
            if (this.props.backspace) {
              return (
                <span key={`${text}-${i}`}>
                  <p>{text}</p>
                  <Typist.Delay ms={500} />
                  <Typist.Backspace count={text.length} delay={200} />
                </span>
              );
            } else {
              return (
                <span key={`${text}-${i}`}>
                  <p>{text}</p>
                  <Typist.Delay ms={500} />
                </span>
              );
            }
          })}
        </Typist>{' '}
      </Styles>
    ) : (
      ''
    );
  }
}

export default TypeAnimation;
