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
      component.find('textarea').simulate('change', 'dummy input'); 
    });
    
    it('shows input in textarea', ()=>{
      expect(component.find('textarea')).to.have.value('dummy input');
        
    });

    it('clears textarea after submit', ()=>{
      component.simulate('submit');  
      expect(component.find('textarea')).to.have.value(''); 
    });
  });
});
