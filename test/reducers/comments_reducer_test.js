import { expect} from '../test_helper.js'; 
import commentsReducer from '../../src/reducers/comments_reducer';
import {SAVE_COMMENT } from '../../src/actions/types'; 

describe('Comments Reducer', ()=>{
  it('handles unknown action type', ()=>{
   expect(commentsReducer(undefined, {})).to.eql([]); 
  });

  it('handles handles SAVE_COMMENT type action', ()=>{
    const action = {type: SAVE_COMMENT, payload:"First" }; 
    expect(commentsReducer([] , action)).to.eql(['First']); 
    
  });
});
