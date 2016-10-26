import {renderComponent, expect} from '../test_helper'; 
import CommentBox from '../../src/components/comment_box'; 

describe('CommentBox', ()=>{
  let component; 

  beforeEach(() =>{
    component = renderComponent(CommentBox); 
  });

  it('has correct class', ()=> {
    expect(component).to.have.class("comment-box"); 
  });

  it('has a text area', ()=>{
    expect(component.find('textarea')).to.exist; 
  });

  it('has a button', ()=>{
    expect(component.find('button')).to.exist; 
  });

  describe('entering input', ()=>{
    beforeEach(() =>{
      component.find('textarea').simulate('change', 'new comment'); 
    });
    
    it('shows input in textarea', ()=>{
        
    });

    it('clears textarea after submit', ()=>{
        
    });
  });
});
