import React, { useState } from 'react';
import { render } from 'react-dom';
import { Button } from '@mono/react-component';

const rootEl = document.getElementById('body');

render(<Button>hello</Button>, rootEl);
