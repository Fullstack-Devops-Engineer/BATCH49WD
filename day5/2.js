// 2.Create your own resume data in JSON format
let resume={
        name:"vinothraj",
        fathersName:"Rajumohan",
        Age:31,
        Emailaddress:"vinothraj777@gmail.com",
        Education:[
            
            {
                type:"UG",
                institution:"S.K.P Institute of Technology",
                location:"Tiruvannamalai"
            },
            {
                type:"HSC",
                institution:"Mount saint josepsh higher secondary school",
                location :"Tiruvannamalai"
            },
            {
                type:"SSLC",
                institution:"Town matricualtion higher secondary school",
                location:"polur,tamilnadu,Tiruvannamalai district"
            }
            ],
            
        TechnologySkills:[ 
            
                {
                    
            InfrastructureSkills:"CCNA MCSE VMWARE REDHAT AWS&AZURE DEVOPS"
        
                },
                {
            programmingSkills:"nodejs javascript angular python"
                },
                {
            DatabaseSkills:"mysql mangodb sybase azure cosmo db"
                },
                ],
                
        PersonalitySkills:"if there is any problem in my path i am sure i can make it a success with effective planning and proper preparation within an execution of time"
            }
         
            // console.log(resume.Education)         // ===> to view the education  
            // console.log(Object.keys(resume))   // ===> to view the keys in json object

            // console.log(resume.TechnologySkills) // ===> to view the keys in json object

            // console.log(resume.hasOwnProperty('PersonalitySkills')) // ==> to check whether the specific key is present or not

            console.log(resume)