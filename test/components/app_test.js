import {renderComponent, expect} from '../test_helper.js'; 
import App from '../../src/components/app';


//group together similar tests w describe
// takes first arg of a string, second arg of a funciton
describe('App', () => {
  let component; 

  beforeEach(()=>{
    component = renderComponent(App); 
  });

  //use it to test single attribute of a target
  it('shows input textarea box', () => {

    //App component instance

    // make assertion about target w expect
    expect(component.find('.comment-box')).to.exist; 
  }); 

  it('shows a list of created comments', () =>{
    expect(component.find('.comment-list')).to.exist; 
  });
});
