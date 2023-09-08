import loginpage from "../../page_objects/loginpage";

describe('firsttestsuite',()=>{

  beforeEach(()=>{
    loginpage.accessStgapplication();
  })

//   afterEach(()=>{ 
   
//  })  

  it('Verify the successful login',()=>{
    
    cy.fixture("applicationsecrets").then((data)=>{
      loginpage.enterUserName(data.UN);
      loginpage.clickNext();
    loginpage.enterPassword(data.PW);
    loginpage.clickLogin();
    //cy.wait(5000);
    loginpage.verifyHomescreen();
    loginpage.clickonProfile();
    //loginpage.verifyLogoutvisible();
    cy.clickLink("Logout");
    //cy.get("a").contains("Logout").click();
    //loginpage.clickLogoutButton();    
    })      
      
  })
  
  it('Verify invalid username format validation',{ tags: ['@smoke', '@regression'] }, ()=>{

    
  cy.fixture("applicationsecrets").then((data)=>{          
    loginpage.enterinvalidUserName(data.invalidUNformat);
    loginpage.clickNext();
    loginpage.verifyinvalidusererror();

    })
  
  })  

  it('Verify invalid credentials error',   
  //retry code at test level
  // {
  //   retries: {
  //     runMode: 2,
  //     openMode: 2,
  //   },
  // },
  ()=>{
    //cy.screenshot('user-login-errors');
    cy.fixture("applicationsecrets").then((data)=>{        
      loginpage.enterinvalidUserName(data.invalidUsername);
      loginpage.clickNext();
      loginpage.enterPassword(data.PW);
      loginpage.clickLogin();
      loginpage.verifybadcredentialserror();             
      })
    
    })
})