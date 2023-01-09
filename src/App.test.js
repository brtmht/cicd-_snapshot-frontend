import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const page = screen.getByText(App);
  expect(page).toBeInTheDocument();
});

// import puppeteer from 'puppeteer';
// import App from './App';
// import { toMatchImageSnapshot } from 'jest-image-snapshot';
// // import renderer from 'react-test-renderer';
// expect.extend({ toMatchImageSnapshot });

// it('renders correctly', async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(<App/>);
//   const image = await page.screenshot();

//   // const tree = renderer
//   //  .create(<App page="https://localhost:3000" />)
//   //  .toJSON();
//    console.log("tttttttttttttttt",image)
//   // expect(image).toMatchImageSnapshot();
// });
