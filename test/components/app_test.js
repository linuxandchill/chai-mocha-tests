import {renderComponent, expect} from '../test_helper.js'; 
import App from '../../src/components/app';


//group together similar tests w describe
// takes first arg of a string, second arg of a funciton
describe('App', () => {

  //use it to test single attribute of a target
  it('shows the correct text', () => {

    //App component instance
    const component= renderComponent(App); 


    // make assertion about target w expect
    expect(component).to.contain('React simple starter'); 
  }); 
});
