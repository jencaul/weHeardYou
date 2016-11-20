var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


var icicle;
check=true;

function init(){
  //left panel controls
  controls();

  // init data
  var json = {
    "id": "node0",
    "name": "<div class='allNodes' style='padding:10px 20px 20px 20px;'><b id='oust' style='font-size:3.5em;'>We Heard You</b><p>We Heard You is an important part of our commitment to providing an open and transparent workplace for GO employees. This tool is your resource for tracking discussions, decisions, and actions on key practices and programs that impact your daily work life. We Heard You is a living document, covering discussions from March 2016 and beyond. It will be updated in real time to keep you informed with the latest news.</p><p>In addition to its reporting function, We Heard You links you to online resources including desk references, forms, training opportunities, and more.</p><p>For questions or comments, or to request additions to We Heard You, please contact <a href='mailto:mary.jeffreys@ee.doe.gov'>Mary Jeffreys</a>, 240.562.1331.</p></div>",
    "data": {
      "$area": 3,
      "$dim": 3,
      "$color": "#01ceff"
    },
		    "children": [
		        	{
		            "id": "red1",
		            "name": "<div class='allNodes topNode'>Teleworking</div>",
		            "data": {
		                "$area": 3,
		                "$dim": 3,
		                "$color": "#ef0e0d"
		            	},
			         "children": [
			            		{
			                    "id": "red2.1",
			                    "name": "<div class='allNodes'>Teleworking: Release</div>",
			                    "data": {
			                        "$area": 4,
			                        "$dim": 4,
			                        "$color": "#f45655"
			                    	},
			                    "children": [
			                       		{
			                            "id": "red2.1.1",
			                            "name": "<div class='allNodes blackText'><h3>Fiscal Q1 2017:</h3><p><b>- 10/20/2016: Telework Town Hall for Q&A with Derek Passarelli, GFO Director.</b> There were approximately 60 GFO employees in attendance with an additional 20 GFO team members participating by phone.</p><p><b>- 10/7/2016:Posted Telework Desk Guide and application form on <a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/Telework\">GFO intranet</a>.</b></p><p><b>- 10/6/2016: Released new telework approach.</b></p></div>",
			                            "data": {
			                                "$area": 4,
			                                "$dim": 4,
			                                "$color": "#f78686"
			                               	}
			                         	
			                          	}
			                      ]//close red level 2.1.1
			               		},{
			               		"id": "red2.2",
			               		"name": "<div class='allNodes'>Teleworking: Town Hall/All Hands</div>",
			               		"data": {
			               		    "$area": 4,
			               		    "$dim": 4,
			               		    "$color": "#f45655"
			               			},
			               		"children": [
			               		   		{
			               		        "id": "red2.2.1",
			               		        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b> - 9/26/2016: Telework approach at GFO continues to be discussed with senior leadership team.</b></p><p><b>- 7/15/2016: Telework Committee provided recommendations to senior leadership.</b> The recommendations document reflects the majority of opinions expressed during committee discussions or points raised by the participants, and provides a new approach and guidance for teleworking. </p></div>",
			               		        "data": {
			               		            "$area": 4,
			               		            "$dim": 4,
			               		            "$color": "#f78686"
			               		           	}
			               		         },{
			               		         "id": "red2.2.2",
			               		         "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>- 6/29/2016: Telework Committee facilitated meeting.</b> Supervisors discussed how they felt about managing employees who telework. About 30 people, including both staff and managers, attended and volunteered to help develop a Teleworking Best Practices guide. Supervisors discussed preferences for teleworking themselves. A summary of the updated telework approach was provided, as well as an invitation to staff to be part of an upcoming telework best practices working group being formed to provide guidance and recommendations to GFO management.</p><p><b>- 6/22/2016: Telework Committee facilitated meeting.</b> Committee came together to discuss best practices, the process and schedule of the group, and broke into subgroups. The Technology and Processes is responsible for defining the technology requirements for teleworking - IM, emails, etc.The Determining Availability and Frequency of Telework subgroup met to discuss the process for determining if, when, and how often staff are eligible for telework.</p><p><b>- 5/31/2016: Moving forward and request for volunteers email.</b> A summary of the updated telework approach was provided, as well as an invitation to staff to be part of an upcoming Telework Committee being formed to provide guidance and recommendations to GFO management.</p><p><b>- 4/27/2016: Follow-up supervisor Teleworking Town Hall.</b>Supervisors discussed preferences for teleworking themselves.</p><p><b>- 4/13/2016: Initial employee Teleworking Town Hall.</b> Supervisors discussed how they felt about managing employees who telework. About 30 people, including both staff and managers, attended and volunteered to help develop a Teleworking Best Practices guide.</p></div>",
			               		         "data": {
			               		             "$area": 4,
			               		             "$dim": 4,
			               		             "$color": "#f78686"
			               		             }
			               		         },{
			               		         "id": "red2.2.2.3",
			               		         "name": "<div class='allNodes blackText'><h3>Fiscal Q2 2016:</h3><p><b>- 3/16/2016: Initial supervisor Teleworking Town Hall.</b> Supervisors discussed how they felt about managing employees who telework.</p></div>",
			               		         "data": {
			               		             "$area": 4,
			               		             "$dim": 4,
			               		             "$color": "#f78686"
			               		             }
			               		         }
			               		 ]//close red level 2.2.1
			               		}     
			            ]//close red level 2.1
		            
		            
		            },{
		            "id": "orange1",
		            "name": "<div class='allNodes topNode'>IT</div>",
		            "data": {
		            	"$area": 3,
		            	"$dim": 3,
		            	"$color": "#e76f0d"
		            	},
		            "children": [
		            	   		{
		            	        "id": "orange2.1",
		            	        "name": "<div class='allNodes'>IT: All Hands</div>",
		            	        "data": {
		            	            "$area": 4,
		            	            "$dim": 4,
		            	            "$color": "#ee9a55"
		            	           	},
		            	        "children": [
		            	        	   		{
		            	        	        "id": "orange2.1.1",
		            	        	        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b>- August 2016: EERE All Hands Meeting.</b>Bob Dixon came out for All Hands and ice cream social.</p></div>",
		            	        	        "data": {
		            	        	            "$area": 4,
		            	        	            "$dim": 4,
		            	        	            "$color": "#f3b786"
		            	        	           	}
		            	         			},
		            	         			{
		            	         			"id": "orange2.1.2",
		            	         			"name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>- 9/23/2016: Intranet update POC Meeting.</b> Lou Sousa from HQ met with the Point of Contact (POC) group in the GFO to discuss updates to the DOE Intranet site.</p><p><b>- 9/22/2016: Golden All Hands meeting.</b> Assistant Secretary Friedman attended the All Hands meeting and presented topics related to his office. The second half of the meeting was dedicated to a Tech Talk.</p></div>",
		            	         			"data": {
		            	         			    "$area": 4,
		            	         			    "$dim": 4,
		            	         			    "$color": "#f3b786"
		            	         			   	}
		            	         				}
		            	         ]//close orange level 2.1.1
		             			},
		             			{
		             			"id": "orange2.2",
		             			"name": "<div class='allNodes'><p>IT: Intranet/Communications</div>",
		             			"data": {
		             			    "$area": 4,
		             			    "$dim": 4,
		             			    "$color": "#ee9a55"
		             			   	},
		             			"children": [
		             				   		{
		             				        "id": "orange2.2.1",
		             				        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b>- 9/1/2016: ITSO Training email sent.</b> EERE's Information Technology Services Offices continues to offer in-house training for Microsoft Office and other programs, both in-person and by webinar. Classes are open to all EERE federal and contractor staff. Starting September 1, 2016, all previous and currently offered training courses will be available for Online Training registration. These online training courses, once registered for, will be available 24/7 for trainees to move through at their own pace and access at their earliest convenience. An email showing the current listing of online courses and how to register for them will be coming out in the next few days.</p><p><b>- 8/31/2016: Outlook search issues:</b>The search functionality in Microsoft Outlook 2013 is yielding incomplete or inconsistent results. EITS is working to resolve the issue.</p><p><b>- 8/30/2016: Outlook search feature issues.</b>GFO IT has been receiving a growing number of tickets in the last week from  GFO users. GFO IT recommended that users who are having issues with the “Search Sent Items” feature in Outlook or the “More” button results, submit a ticket to EITS through DAYS: Select “Get Help” and then “Something Broken” to report the issue. GFO IT also asked EITS for a status update on resolving this issue, and whether there would be communications from EITS on the issue. </p></div>",
		             				        "data": {
		             				            "$area": 4,
		             				            "$dim": 4,
		             				            "$color": "#f3b786"
		             				            }
		             				         },{
		             				          "id": "orange2.2.2",
		             				          "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>- 7/28/2016: Ongoing \"no sound\" issue email.</b> Issue that first came up in December 2015 and EITS has been working on since April. Email cites concerns that issue has not been resolved, recognizes recent improvements in the process, and highlights need for staying diligent in resolving issues.</p><p><b>- 7/25/2016: Efforts to resolve Microsoft 365 issues.</b>We are averaging about 10 tickets per day unless there is an upgrade or outage. Still working on trying to decrease the flare ups but we are at least seeing a faster turnaround time on issue resolution.</p><p><b>- 6/13/2016: New printers online email.</b>Notice and instructions on selecting new default printers sent to GFO users.</p><p><b>- 4/28/2016: GO IT email notification.</b> IT has been made aware of a suspicious email going around from “Irwin Fritz” with an @calfrac.com address. This does not appear to be a legitimate email and is being investigated by the “ Mail Abuse” team at EITS. Please do not open this or click on any links, simply delete the email. </p></div>",
		             				          "data": {
		             				              "$area": 4,
		             				              "$dim": 4,
		             				              "$color": "#f3b786"
		             				              }
		             				          },{
		             				           "id": "orange2.2.3",
		             				           "name": "<div class='allNodes blackText'><h3>Fiscal Q2 2016:</h3><p><b>- 3/30/2016: Golden IT status and Office 365 migration email.</b> Communication on the current IT status regarding migration of the GFO to Microsoft Office 365 and the latest update on the non-responsive applications issue related to the Office 2013 upgrade.</p><p><b>- Action required/update from EITS.</b> Some customers are experiencing multiple credential prompts from Office 365. EITS provided two options to try to resolve the issue, and when to escalate up to EITS.</p><p><b>- 3/2/2016:</b> Text Wire mobile phone notification is now available for IT service disruptions. Thanks to an excellent employee suggestion, we will be using Text Wire for general Golden IT disruptions. If you want to be informed of general disruptions to our IT system or office openings or delays or closures, federal and contractor staff may sign up to receive notifications from GO Text Wire on your mobile phone by completing the <a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/golden/adverseweather\">text wire documentation</a> and returning it to the GRO Security Team in Room C-244.</p><p><b>- 1/4/2016: Welcome to the New Year! IT improvement request.</b> Derek Passarelli sent out an email detailing how he had reached out to HQ IT to improve the level of IT services at Golden. They assigned a dedicated team to work on Golden IT issues in coordination with local Golden IT staff, and Derek plans on meeting with them weekly until there is significant improvement in the stability of Golden IT Network.</p></div>",
		             				           "data": {
		             				               "$area": 4,
		             				               "$dim": 4,
		             				               "$color": "#f3b786"
		             				               }
		             				          }
		             			]//close orange level 2.2.1
		             			}
		             ]//close orange level 2.1
		            	         
		            	         
		     		},{
		     		"id": "green1",
		     		"name": "<div class='allNodes topNode'>HR & Performance Management</div>",
		     		"data": {
		     			 "$area": 3,
		     			 "$dim": 3,
		     			 "$color": "#006e19"
		     			 },
		     		"children": [
		     			   		{
		     			        "id": "green2.1",
		     			        "name": "<div class='allNodes'>HR & Performance Management: Town Hall/All Hands</div>",
		     			        "data": {
		     			            "$area": 4,
		     			            "$dim": 4,
		     			            "$color": "#4c995e"
		     			           	},
		     			         "children": [
		     			         		   		{
		     			         		        "id": "green2.1.1",
		     			         		        "name": "<div class='allNodes blackText'><h3>Fiscal Q1 2017:</h3><p><b>- 10/12/2016: Performance Reviews Schedule.</b> Derek Passarelli released the performance management schedule. The Office of Personnel Management offers <a target=\"_blank\" href=\"https://www.opm.gov/policy-data-oversight/performance-management/performance-management-cycle/rating/supervisors-checklist-for-preparing-for-employee-performance-reviews/\">a supervisor checklist</a> for preparing for employee performance reviews that is helpful to both supervisors and employees. Also, DOE has issued <a target=\"_blank\" href=\"http://energy.gov/hc/downloads/supervisory-non-supervisory-employee-performance-management-and-recognition-program\">a performance management desk reference</a> with specific guidance on the performance review process. As you prepare for your performance review meetings this month, please consider the helpful information in these documents.</p></div>",
		     			         		        "data": {
		     			         		            "$area": 4,
		     			         		            "$dim": 4,
		     			         		            "$color": "#7fb68c"
		     			         		           	}
		     			         		        },{
		     			         		          "id": "green2.1.2",
		     			         		          "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b>- 9/14/2016: All Hands coffee.</b> GFO hosted an All Hands coffee to introduce new DOE Ombudsman, William (Bill) Maurer. Mauer also attended the Senior Staff meeting.</p><p><b>- 9/29/2016: Tom Quinn</b>, Science & Energy Deputy Director for the HR Shared Service Center at DOE, and responsible for oversight of ORNL, visited DOE.</p><p><b>- 8/2016: EERE All Hands meeting.</b> Bob Dixon, EERE, came out for All Hands meeting and ice cream social.</p></div>",
		     			         		          "data": {
		     			         		              "$area": 4,
		     			         		              "$dim": 4,
		     			         		              "$color": "#7fb68c"
		     			         		             	}
		     			         		          },{
		     			         		            "id": "green2.1.3",
		     			         		            "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>- June 2016: Performance Town Hall.</b> Derek Passarelli led a Performance Town Hall at GFO on June 13, 2016, with about 25 employees attending the meeting in person and more joining by phone. The meeting focused on the performance evaluation process, the ePerformance system, and questions or issues raised by the employees in attendance.</p></div>",
		     			         		            "data": {
		     			         		                "$area": 4,
		     			         		                "$dim": 4,
		     			         		                "$color": "#7fb68c"
		     			         		               	}
		     			         		           }, {
		     			         		            "id": "green2.1.4",
		     			         		            "name": "<div class='allNodes blackText'><h3>Fiscal Q2 2016:</h3><p><b>- March 2016: ORNL visit.</b> GFO management visit to Oakridge National Laboratory (ORNL).</p><p><b>- January 2016:</b> Bob Gibbs, Chief Human Capital Officer at DOE, visited GFO.</p></div>",
		     			         		            "data": {
		     			         		                "$area": 4,
		     			         		                "$dim": 4,
		     			         		                "$color": "#7fb68c"
		     			         		                }
		     			         		           },{
		     			         		            "id": "green2.1.5",
		     			         		            "name": "<div class='allNodes blackText'><h3>Fiscal Q1 2016:</h3><p><b>- December 2015:</b> Ken Dewert, Office of Special Counsel, came to GFO to discuss transition.</p></div>",
		     			         		            "data": {
		     			         		                "$area": 4,
		     			         		                "$dim": 4,
		     			         		                "$color": "#7fb68c"
		     			         		                }
		     			         		           }
		     			         		              	
		     			          ]//close green level 2.1.1
		     			        },{
		     			         "id": "green2.2",
		     			         "name": "<div class='allNodes'>HR & Performance Management: Contacts</div>",
		     			         "data": {
		     			             "$area": 4,
		     			             "$dim": 4,
		     			             "$color": "#4c995e"
		     			            	},
		     			         "children": [
		     			         	   		{
		     			         	        "id": "green2.2.1",
		     			         	        "name": "<div class='allNodes blackText'><p><b>HR Business Partner:</b> Jacqueline Wren (Phone: 240-562-1818; Email: jacqueline.wren@hq.doe.gov)</p><p><b>HR Business Partner backup:</b> Patricia Bledsoe (Phone: 202-287-5252; Email: patricia.bledsoe@hq.doe.gov</p></div>",
		     			         	        "data": {
		     			         	            "$area": 4,
		     			         	            "$dim": 4,
		     			         	            "$color": "#7fb68c"
		     			         	           	}
		     			         	         }
		     			         ]//close green level 2.2.1
		     			         },
		     			         {
		     			          "id": "green2.3",
		     			          "name": "<div class='allNodes'>HR & Performance Management: Performance Management Schedule</div>",
		     			          "data": {
		     			              "$area": 4,
		     			              "$dim": 4,
		     			              "$color": "#4c995e"
		     			             	},
		     			          "children": [
		     			           	   		{
		     			           	        "id": "green2.2.2",
		     			           	        "name": "<div class='allNodes blackText'><p>1. Performance Plans finalized and submitted by November</p><p>2. First Performance Review completed in March</p><p>3. Second Performance Review completed in June</p><p>4. Final Performance Review completed by October</p></div>",
		     			           	        "data": {
		     			           	            "$area": 4,
		     			           	            "$dim": 4,
		     			           	            "$color": "#7fb68c"
		     			           	           	}
		     			           	         }
		     			           ]//close green level 2.2.2
		     			             	
		     			          }	
		     	    ]//close green level 2.1 
		     		},{
		     		"id": "lightGreen1",
		     		"name": "<div class='allNodes topNode'>Leadership & Training</div>",
		     		"data": {
		     			"$area": 3,
		     			"$dim": 3,
		     			"$color": "#6fb33e"
		     			},
		     		"children": [
		     		  	   		{
		     		  	        "id": "lightGreen2.1",
		     		  	        "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/WMO/CommunicationTraining\">Leadership & Training: Intranet/Communications</a></div>",
		     		  	        "data": {
		     		  	            "$area": 4,
		     		  	            "$dim": 4,
		     		  	            "$color": "#9ecb7e"
		     		  	           	},
		     		  	        "children": [
		     		  	        	  	   		{
		     		  	        	  	        "id": "lightGreen2.1.1",
		     		  	        	  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b>- 9/20/2016: Derek Passarelli email announcing updated training calendar for Golden.</b> The schedule includes classes for supervisors. Please note that the Inter-Organizational Collaboration training has been rescheduled from October to December. The class schedule for all employees can be found on i2 under EERE Training Opportunities - Golden Field Office (http://eere-intranet2.ee.doe.gov/WMO/EERETrainingOpportunities).</p><p><b>- 7/13/2016: Telework working group meeting (employees)</b></p><p><b>- 7/11/2016: Telework working group meeting (employees)</b></p><p><b>- 7/7/2016: Telework working group meeting (employees)</b></p></div>",
		     		  	        	  	        "data": {
		     		  	        	  	            "$area": 4,
		     		  	        	  	            "$dim": 4,
		     		  	        	  	            "$color": "#bdd6aa"
		     		  	        	  	           	}
		     		  	        	  	         },{
		     		  	        	  	         "id": "lightGreen2.1.2",
		     		  	        	  	         "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>- 5/17/2016: Training Opportunity for GS-9 through GS-12.</b> As part of our continuing effort to promote and enhance the development of our employees, the GFO will be sponsoring applicants through a competitive process to participate in the Colorado Leadership Foundations Program. This 6-month long program recognizes the importance of developing emerging leaders early in their careers. It is designed for Federal GS-9 to GS-12 level professionals.</p></div>",
		     		  	        	  	         "data": {
		     		  	        	  	             "$area": 4,
		     		  	        	  	             "$dim": 4,
		     		  	        	  	             "$color": "#bdd6aa"
		     		  	        	  	            }
		     		  	        	  	          }       
		     		  	         ]//close lightGreen level 2.1.1
		     		  	         },{
		     		  	            "id": "lightGreen2.2",
		     		  	            "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/WMO/OfficeSkillsTraining\">Leadership & Training: Software Training Opportunities</a></div>",
		     		  	            "data": {
		     		  	                "$area": 4,
		     		  	                "$dim": 4,
		     		  	                "$color": "#9ecb7e"
		     		  	               	},
		     		  	            "children": [
		     		  	               	  	   		{
		     		  	               	  	        "id": "lightGreen2.2.1",
		     		  	               	  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p>EERE's Information Technology Services Offices continues to offer software training opportunities. All previous and currently offered training courses are now available for Online Training registration. Once registered, courses are available 24/7 for trainees to move through at their own pace and access at their own convenience. Courses currently available: <ul><li>Adobe Acrobat XI Pro: The Core Essentials</li><li>Excel 2013: The Core Essentials</li><li>Excel 2013: Pivot Tables and Charts</li><li>OneNote 2013: The Core Essentials</li><li>Outlook 2013: The Core Essentials</li><li>PowerPoint 2013: Pivot Tables and Charts</li><li>Project 2013: The Core Essentials</li><li>Publisher 2013: The Core Essentials</li><li>Visio 2013: The Core Essentials</li><li>Word 2013: The Core Essential</li></ul></p></div>",
		     		  	               	  	        "data": {
		     		  	               	  	            "$area": 4,
		     		  	               	  	            "$dim": 4,
		     		  	               	  	            "$color": "#bdd6aa"
		     		  	               	  	           	}
		     		  	               	  	         }
		     		  	            ]//close lightGreen level 2.2.1   	
		     		  	         },{
		     		  	             "id": "lightGreen2.3",
		     		  	             "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/WMO/EERETrainingResources\">Leadership & Training: EERE Training Resources</a></div>",
		     		  	             "data": {
		     		  	                 "$area": 4,
		     		  	                 "$dim": 4,
		     		  	                 "$color": "#9ecb7e"
		     		  	                },
		     		  	             "children": [
		     		  	             	  	   		{
		     		  	             	  	        "id": "lightGreen2.3.1",
		     		  	             	  	        "name": "<div class='allNodes blackText'><p><a target=\"_blank\" href=\"http://energy.gov/hc/individual-development-plan-idp\"><b>Individual Development Plan (IDP):</b></a></p><p>The IDP is a tool that helps employees to address their individual training and developmental needs. IDPs provide an opportunity for supervisors and employees to discuss goals that relate to employee and organizational needs.</p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/sites/default/files/documents/EERE Signed SOP.pdf#overlay-context=obs/HumanCapital/EERETrainingResources\"><b>EERE Training Standard Operating Procedure (SOP):</b></a></p><p>The objective of training is to improve workforce performance related to the mission and strategic objectives of the DOE. Training shall be administered in a fair, consistent, and cost-effective manner. The Training SOP addresses requesting and approving training, mandatory training, IDPs, and the roles and responsibilities of employees, supervisors, and the Training Office.</p><p><a target=\"_blank\" href=\"https://eeredocman.ee.doe.gov/TrainingQuestionnaire/SitePages/EERE_Training_Questionnaire_Results.aspx\"><b>EERE Rate and Review site (R&R):</b></a></p><p>EERE employees considering requesting a training course can go to the R&R site to see how other employees have rated the course before committing to it. In R&R, employees can search for courses by name to see its ratings and reviews, and also rate each training course using a five-star rating system similar to Yelp or Amazon. The rater will be asked to comment on whether the course met their expectations, whether it can be applied to their current position, and whether they'd recommend it to others.</p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/sites/default/files/documents/DOE Order on Training_0.pdf\"><b>DOE Training Order:</b></a></p><p>The DOE Training Order establishes the requirements and specifications that must be met for federal employee training within the DOE. Included within the Training Order are details regarding the various types of training that may be offered, processes of obtaining necessary approval, and requirements that must be met to satisfy DOE training standards and complete the training process.</p></div>",
		     		  	             	  	        "data": {
		     		  	             	  	            "$area": 4,
		     		  	             	  	            "$dim": 4,
		     		  	             	  	            "$color": "#bdd6aa"
		     		  	             	  	           	}
		     		  	             	  	         }
		     		  	            ]//close lightGreen level 2.3.1
		     		  	           }
		     		  ]//close lightGreen level 2.1
		     		},{
		     			"id": "darkblue1",
		     			"name": "<div class='allNodes topNode'>Leadership & Training/Management</div>",
		     			"data": {
		     				"$area": 3,
		     				"$dim": 3,
		     				"$color": "#122089"
		     				},
		     			"children": [
		     			  	   		{
		     			  	            "id": "darkblue2.1",
		     			  	            "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/WMO/SupervisorTraining\">Leadership & Training: New Supervisors</a><p>As we become aware of new training opportunities, we will post them on the i2 Event Calendar.</p></div>",
		     			  	            "data": {
		     			  	                "$area": 4,
		     			  	                "$dim": 4,
		     			  	                "$color": "#5962ac"
		     			  	               	},
		     			  	            "children": [
		     			  	               	  	   		{
		     			  	               	  	        "id": "darkblue2.1.1",
		     			  	               	  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016: </h3><p> - Supervisory Essentials was offered September 12–15, 2016.</p><p>- Navigating the Federal Hiring Process was offered September 16, 2016.</p></div>",
		     			  	               	  	        "data": {
		     			  	               	  	            "$area": 4,
		     			  	               	  	            "$dim": 4,
		     			  	               	  	            "$color": "#888fc4"
		     			  	               	  	           	}
		     			  	               	  	         },{
		     			  	               	  	        "id": "darkblue2.1.2",
		     			  	               	  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>Requirements:</b> All newly appointed first-level supervisors must complete a minimum of 80 hours of appropriate training within 2 years of appointment to an initial supervisory position.  A total of 40 hours of supervisory training must be completed within the first year. The 80 hours of training will include, but is not limited to, such topics as<ul><li>Mentoring</li><li>Employee developmen</li><li>Conducting performance appraisals</li><li>Dealing with poor performers</li><li>Developing results focused critical elements</li></ul></p></div>",
		     			  	               	  	        "data": {
		     			  	               	  	            "$area": 4,
		     			  	               	  	            "$dim": 4,
		     			  	               	  	            "$color": "#888fc4"
		     			  	               	  	           	}
		     			  	               	  	         }         
		     			  	             ]//close darkblue level 2.1.1
		     			  	          },{
		     			  	             "id": "darkblue2.2",
		     			  	             "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/WMO/SupervisorTraining\">Leadership & Training: Trainings for Managers</a><p></p></div>",
		     			  	             "data": {
		     			  	                 "$area": 4,
		     			  	                 "$dim": 4,
		     			  	                 "$color": "#5962ac"
		     			  	                 },
		     			  	             "children": [
		     			  	                   	  	   		{
		     			  	                   	  	        "id": "darkblue2.2.1",
		     			  	                   	  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q1 2017:</h3><p>Inter-Organizational Collaboration is scheduled for October 19–20, 2016.</p></div>",
		     			  	                   	  	        "data": {
		     			  	                   	  	            "$area": 4,
		     			  	                   	  	            "$dim": 4,
		     			  	                   	  	            "$color": "#888fc4"
		     			  	                   	  	           	}
		     			  	                   	  	         },{
		     			  	                   	  	         "id": "darkblue2.2.2",
		     			  	                   	  	         "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b>Requirements:</b> Non-probationary supervisors (supervisors with more than 2 years’ experience who have met the 80 hours requirement) must complete a minimum of 8 hours of continuing education in a topic related to supervisory development each fiscal year. This training will assist supervisors in maintaining a current knowledge and understanding of policies and practices that influence their supervisory duties and responsibilities.<ul><li>Building Trust is scheduled for August 24–25, 2016.</li><li>Resiliency Training took place on July 27, 2016.</li></ul></p></div>",
		     			  	                   	  	         "data": {
		     			  	                   	  	             "$area": 4,
		     			  	                   	  	             "$dim": 4,
		     			  	                   	  	             "$color": "#888fc4"
		     			  	                   	  	            	}
		     			  	                   	  	          }        
		     			  	            ]//close darkblue level 2.2.1
		     			  	          },{
		     			  	             "id": "darkblue2.3",
		     			  	             "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/WMO/LeadershipTraining\">Leadership & Training: Leadership Development</a></div>",
		     			  	             "data": {
		     			  	                 "$area": 4,
		     			  	                 "$dim": 4,
		     			  	                 "$color": "#5962ac"
		     			  	                 },
		     			  	             "children": [
		     			  	          	  	   		{
		     			  	          	  	        "id": "darkblue2.3.1",
		     			  	          	  	        "name": "<div class='allNodes blackText'><h3>GS 4–12:</h3><p> - Graduate School Aspiring Leader: GS 4–6</p><p>- Graduate School New Leader Program: GS 7–11</p><p>- Colorado Leadership Foundations Program: GS 9–12</p></div>",
		     			  	          	  	        "data": {
		     			  	          	  	            "$area": 4,
		     			  	          	  	            "$dim": 4,
		     			  	          	  	            "$color": "#888fc4"
		     			  	          	  	           	}
		     			  	          	  	         },{
		     			  	          	  	        "id": "darkblue2.3.2",
		     			  	          	  	        "name": "<div class='allNodes blackText'><h3>GS 11–SES:</h3><p> - Graduate School Executive Leadership Program: GS 11–13</p><p>- WMDC CLDP: GS 13–14</p><p>- Graduate School Executive Potential Program: GS 13–15</p><p>- Senior Executive Fellows – Harvard Kennedy School: GS 14/15</p><p>- FEI Federal Executive Institute: SES and GS/GM-15</p><p>- Excellence in Government Fellows Program: GS 14–15 or exceptional GS-13s</p><p>- Executive Master Class GS-15</p></div>",
		     			  	          	  	        "data": {
		     			  	          	  	            "$area": 4,
		     			  	          	  	            "$dim": 4,
		     			  	          	  	            "$color": "#888fc4"
		     			  	          	  	           	}
		     			  	          	  	         }          
		     			  	          	 ]//close darkblue level 2.3.1               
		     			  	          }
		     			  ]//close darkblue level 2.1
		     			
		     		},{
		     		"id": "lightblue1",
		     		"name": "<div class='allNodes topNode'>Golden Community Council</div>",
		     		"data": {
		     			"$area": 3,
		     			"$dim": 3,
		     			"$color": "#2357ff"
		     			},
		     		"children": [
		     			  	   		{
		     			  	        "id": "lightblue2.1",
		     			  	        "name": "<div class='allNodes'><a class=\"whiteLink\" target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/CommunityCouncil\">Golden Community Council: Intranet/Communications</a></div>",
		     			  	        "data": {
		     			  	            "$area": 4,
		     			  	            "$dim": 4,
		     			  	            "$color": "#6589ff"
		     			  	           	},
		     			  	        "children": [
		     			  	        		  	   		{
		     			  	        		  	        "id": "lightblue2.1.1",
		     			  	        		  	        "name": "<div class='allNodes blackText'><p>The Golden Community Council is an employee-directed organization committed to strengthening the DOE community at the GFO. We sponsor events throughout the year such as potlucks, coffee breaks, Rockies games, and brown bag lunch presentations as well as longer-term initiatives like ‘Golden Fitness Month’ to bring the GFO community together outside our normal work routine. These events are important because they give employees a chance to interact and form deeper, stronger relationships. People begin to put faces to names on emails, and interact more on a personal level. Over time we build a stronger sense of community.</p></div>",
		     			  	        		  	        "data": {
		     			  	        		  	            "$area": 4,
		     			  	        		  	            "$dim": 4,
		     			  	        		  	            "$color": "#91abff"
		     			  	        		  	           	}
		     			  	        		  	         }
		     			  	         ]//close lightblue level 2.1.1
		     		                 }
		     	    ]//close lightblue level2.1
		     		},{
		     		"id": "purple1",
		     		"name": "<div class='allNodes topNode'>Great Place to Work</div>",
		     		"data": {
		     			"$area": 3,
		     			"$dim": 3,
		     			"$color": "#5e0091"
		     		    },
		     		"children": [
		     				  	   		{
		     				  	        "id": "purple2.1",
		     				  	        "name": "<div class='allNodes'>Great Place to  Work: Town Hall/All Hands</div>",
		     				  	        "data": {
		     				  	            "$area": 4,
		     				  	            "$dim": 4,
		     				  	            "$color": "#8e4cb2"
		     				  	           	},
		     				  	        "children": [
		     				  	        			  	   		{
		     				  	        			  	        "id": "purple2.1.1",
		     				  	        			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q2 2016:</h3><p><b>- 3/29/2016: Operations Team meeting.</b> Tim Meeks led an Operations Team meeting that focused on the status of follow-up actions from the FEVS facilitated meetings, as well as plans for activities to address the concerns and issues raise. </p></div>",
		     				  	        			  	        "data": {
		     				  	        			  	            "$area": 4,
		     				  	        			  	            "$dim": 4,
		     				  	        			  	            "$color": "#ae7fc8"
		     				  	        			  	           	}
		     				  	        			  	        }
		     				  	        			 ]//close purple level 2.1.1
		     				  	        },{
		     				  	        "id": "purple2.2",
		     				  	        "name": "<div class='allNodes'>Great Place to Work: Intranet/ Communications</div>",
		     				  	        "data": {
		     				  	            "$area": 4,
		     				  	            "$dim": 4,
		     				  	            "$color": "#8e4cb2"
		     				  	           	},
		     				  	        "children": [
		     				  	           			  	   		{
		     				  	           			  	        "id": "purple2.2.1",
		     				  	           			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q1 2017:</h3><p><b> - 10/10/2016: Update.</b> Launched <a target=\"http://eere-intranet2.ee.doe.gov/Golden/home\" href=\"http://eere-intranet2.ee.doe.gov/Golden/home\">updated Intranet</a>.</p></div>",
		     				  	           			  	        "data": {
		     				  	           			  	            "$area": 4,
		     				  	           			  	            "$dim": 4,
		     				  	           			  	            "$color": "#ae7fc8"
		     				  	           			  	           	}
		     				  	           			  	        },{
		     				  	           			  	        "id": "purple2.2.2",
		     				  	           			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016:</h3><p><b>- 5/2/2016: Coffee hour.</b> Invitation to staff to join Dr. Danielson for a GFO coffee hour on May 5.</p></div>",
		     				  	           			  	        "data": {
		     				  	           			  	            "$area": 4,
		     				  	           			  	            "$dim": 4,
		     				  	           			  	            "$color": "#ae7fc8"
		     				  	           			  	           	}
		     				  	           			  	        }
		     				  	           			 ]//close purple level 2.2.1
		     				  	        },{
		     				  	        "id": "purple2.3",
		     				  	        "name": "<div class='allNodes'>Great Place to Work: Questions and Suggestions</div>",
		     				  	        "data": {
		     				  	            "$area": 4,
		     				  	            "$dim": 4,
		     				  	            "$color": "#8e4cb2"
		     				  	           	},
		     				  	        "children": [
		     				  	              			  	   		{
		     				  	              			  	        "id": "purple2.3.1",
		     				  	              			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q2 2016:</h3><p>- <a targe=\"_blank\" href=\"mailto:gosuggestions@ee.doe.gov\">Suggestion box. A new Great Place to Work email address was set up as an online suggestion box.</a></p><b>- Bring back the lunchroom.</b> The first floor intern cubicle area was refurbished to include lunch tables for staff to use in 2016.<p><b>- Teleworking at GFO.</b> A short-term Telework Committee was formed to provide recommendations on GFO's telework approach for all GFO staff. These recommendations were submitted on July 15, 2016. The recommendations documents will be reviewed by the senior leadership team and will be posted on the EERE intranet.</p><p><b>- ADA Compliance.</b> Evacuation chairs were added to the stairwells on the DOE wing of the Research Support Facility. Braille was installed on doors in the DOE wing as well.</p><p></p><p><b>- Texts for IT problems.</b> DOE staff now receive text message updates on their DOE phones when IT systems are malfunctioning. </p></div>",
		     				  	              			  	        "data": {
		     				  	              			  	            "$area": 4,
		     				  	              			  	            "$dim": 4,
		     				  	              			  	            "$color": "#ae7fc8"
		     				  	              			  	           	}
		     				  	              			  	        }  
		     				  	                    ]//close purple level 2.3.1 	
		     				  	        }
		     				  	     
		     				  	 ]//close purple level 2.1
		     		},{
		     		"id": "pink1",
		     		"name": "<div class='allNodes topNode'>Golden Happenings and Employee Outreach</div>",
		     		"data": {
		     			"$area": 3,
		     			"$dim": 3,
		     			"$color": "#cd00a2"
		     			},
		            "children": [
					  	   		{
					  	        "id": "pink2.1",
					  	        "name": "<div class='allNodes'>GFO Offices</div>",
					  	        "data": {
					  	            "$area": 4,
					  	            "$dim": 4,
					  	            "$color": "#dc4cbe"
					  	           	},
					            "children": [
					         			  	   		{
					         			  	        "id": "pink2.1.1",
					         			  	        "name": "<div class='allNodes blackText'><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/AcquisitionOffice\">Acquisition Office</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/Admin\">Administrative Support Team</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/EnvironmentalOversightOffice\">Environment, Safety, and Health Office</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/FinancialAssistanceOffice\">Financial Assistance Office</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/FinancialOversightOffice\">Financial Oversight Office</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/NLOO\"></a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/NLOO\">National Laboratory Oversight Office</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/OfficeOfChiefCounsel\">Office of Chief Counsel</a></p><p><a target=\"_blank\" href=\"http://eere-intranet2.ee.doe.gov/Golden/ProcurementPolicy\">Procurement Policy and Compliance Office</a></p></div>",
					         			  	        "data": {
					         			  	            "$area": 4,
					         			  	            "$dim": 4,
					         			  	            "$color": "#e67fd0"
					         			  	           	}
					         			  	        }
					         		]//close pink level 2.1.2
					  	        },{
					  	        "id": "pink2.2",
					  	        "name": "<div class='allNodes'>GFO: Intranet/Communications</div>",
					  	        "data": {
					  	            "$area": 4,
					  	            "$dim": 4,
					  	            "$color": "#dc4cbe"
					  	           	},
					  	        "children": [
					  	              			  	   		{
					  	              			  	        "id": "pink2.2.1",
					  	              			  	        "name": "<div class='allNodes blackText'><h3>FY 2017 Q1:</h3><p><b>- 10/11/2016: All Hand meeting and Employee Appreciation.</b> Employee All Hands meeting and Appreciation event at Holiday Bowling & Billiards.</p></div>",
					  	              			  	        "data": {
					  	              			  	            "$area": 4,
					  	              			  	            "$dim": 4,
					  	              			  	            "$color": "#e67fd0"
					  	              			  	           	}
					  	              			  	        },{
					  	              			  	        "id": "pink2.2.2",
					  	              			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q4 2016:</h3><p><b>- 9/6/2016: Tech Talk.</b> Posted article on i2 about Tech Talk #2 - Wind and Water Soars with Offshore Wind.</p></div>",
					  	              			  	        "data": {
					  	              			  	            "$area": 4,
					  	              			  	            "$dim": 4,
					  	              			  	            "$color": "#e67fd0"
					  	              			  	           	}
					  	              			  	        },{
					  	              			  	        "id": "pink2.2.3",
					  	              			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q3 2016</h3><p><b>- 5/17/2016: Reminder.</b> In support of the Golden Community Council-sponsored '80s-themed 5K Run/Walk tomorrow, we have designated tomorrow '80s Day in the office. Feel free to wear any '80s-themed office-appropriate attire tomorrow. </p><p><b>- 5/4/2016: Thank you email sent by Derek Passerelli.</b> Derek sent out a communication thanking staff for helping to organize and attending Governor Hickenlooper’s visit and talk at the National Renewable Energy Laboratory (NREL) facility. The email thanked staff for coming together to bring thoughtful speakers to the Golden Field Office (GFO) to better understand our mission and the role we play in bringing a clean energy economy to the United States; he solicited input on additional speaker suggestions.</p></div>",
					  	              			  	        "data": {
					  	              			  	            "$area": 4,
					  	              			  	            "$dim": 4,
					  	              			  	            "$color": "#e67fd0"
					  	              			  	           	}
					  	              			  	        },{
					  	              			  	        "id": "pink2.2.4",
					  	              			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q2 2016:</h3><p><b>- 4/29/2016: Take Our Kids to Work (TOKWD) Day thank you.</b> Email sent by  Derek Passarelli. A special thank you to our dedicated team who make TOKWD a smashing success. The children were able to participate in activities that were not only educational, but fun.</p><p><b>- 3/11/2016: All Hands meeting.</b> Derek Passarelli invited staff to attend the Special All Hands meeting in the Energy Systems Integration Facility (ESIF) to hear Under Secretary Orr talk about DOE's top priorities this year, including the proposed EERE budget and its outlook, as well as the increased interest in the recently released Quadrennial Technology Review. </p></div>",
					  	              			  	        "data": {
					  	              			  	            "$area": 4,
					  	              			  	            "$dim": 4,
					  	              			  	            "$color": "#e67fd0"
					  	              			  	           	}
					  	              			  	        },{
					  	              			  	        "id": "pink2.2.5",
					  	              			  	        "name": "<div class='allNodes blackText'><h3>Fiscal Q1 2016:</h3><p>The Feds Feed Families campaign is underway and the Office of Energy Efficiency and Rewnewable Energy (EERE) is in the midst of a food fight! Special collection boxes have been set up at the Energy Department's (DOE's) headquarters for the Transportation, Renewable Power, Energy Efficiency, and Operations and Strategic Programs offices. The winning office will be announced by Dr. David Danielson during the EERE Annual Cookout on October 1.</p><p>The Feds Feed Families campaign ends October 2 and the DOE goal is to collect more than 345,000 pounds of food. If every DOE employee collected or gave 26 pounds of food or non-perishable items it would raise 350,000 pounds of food. Since the campaign started in 2009, federal workers have donated and collected more than 39 million pounds of food and other non-perishable items to support families across the area.</p></div>",
					  	              			  	        "data": {
					  	              			  	            "$area": 4,
					  	              			  	            "$dim": 4,
					  	              			  	            "$color": "#e67fd0"
					  	              			  	           	}
					  	              			  	        }
					  	              		]//close pink level 2.2.1
					  	        }  
					 ]//close pink level 2.1
		     		}
		  	 ]//close level 1
  };
  // end setup

  // init Icicle
  icicle = new $jit.Icicle({
    // id of the visualization container
    injectInto: 'infovis',
    // whether to add transition animations
    animate: animate,
    // nodes offset
    offset: 1,
    // whether to add cushion type nodes
    cushion: false,
    //show only three levels at a time
    constrained: true,
    levelsToShow: 3,
    // enable tips
    Tips: {
      enable: true,
      type: 'Native',
      // add positioning offsets
      offsetX: 20,
      offsetY: 20,
      // implement the onShow method to
      // add content to the tooltip when a node
      // is hovered
      onShow: function(tip, node){
          // count children
          var count = 0;
          node.eachSubnode(function(){
            count++;
          });
          // add tooltip info
          tip.innerHTML = "<div class=\"tip-title\">" + node.name
              + "</div>";
        }
      },
      // Add events to nodes
      Events: {
        enable: true,
        onMouseEnter: function(node) {
          //add border and replot node
          //node.setData('border', '#33dddd');
          //icicle.fx.plotNode(node, icicle.canvas);
          //icicle.labels.plotLabel(icicle.canvas, node, icicle.controller);
        },
        onMouseLeave: function(node) {
          node.removeData('border');
          icicle.fx.plot();
        },
        onClick: function(node){
          if (node) {
            //hide tips and selections
            icicle.tips.hide();
            if(icicle.events.hovered)
              this.onMouseLeave(icicle.events.hovered);
            //perform the enter animation
            icicle.enter(node);
          }
        },
        onRightClick: function(){
          //hide tips and selections
          icicle.tips.hide();
          if(icicle.events.hovered)
            this.onMouseLeave(icicle.events.hovered);
          //perform the out animation
          icicle.out();
        }
      },
      // Add canvas label styling
      Label: {
        type: "HTML" //labelType // "Native" or "HTML"
      },
      // Add the name of the node in the corresponding label
      // This method is called once, on label creation and only for DOM and not
      // Native labels.
      onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
      var style = domElement.style;
      style.fontSize = '0.9em';
      
      style.cursor = 'pointer';
		
		if (node.id=="node0"){
			
      style.color = '#000';
			}else{
	  style.color = '#fff';		
			}
      
	  style.display = 'none';
		style.overflow = 'hidden';
		
    },
    // Change some label dom properties.
    // This method is called each time a label is plotted.
    onPlaceLabel: function(domElement, node){
        var style = domElement.style,
            width = node.getData('width'),
            height = node.getData('height');
        if(width < 7 || height < 7) {
          style.display = 'none';
        } else {
          style.display = '';
          style.width = width + 'px';
          style.height = height + 'px';
        }
      }
    });

  // load data
  icicle.loadJSON(json);
  // compute positions and plot
  icicle.refresh();
  //end
}

//init controls
function controls() {
  var jit = $jit;
  var gotoparent = jit.id('update');
  jit.util.addEvent(gotoparent, 'click', function() {
    icicle.out();
  });
    
  var select = jit.id('s-orientation');
  jit.util.addEvent(select, 'change', function () {
    icicle.layout.orientation = select[select.selectedIndex].value; //"h" or "v"
    icicle.refresh();
  });

    //var levelsToShowSelect = jit.id('i-levels-to-show');
	
  /*jit.util.addEvent(levelsToShowSelect, 'change', function () {
	 
     var index = 2; //levelsToShowSelect.selectedIndex; //numeric index
	  
    if(index == 0) {
      icicle.config.constrained = false;
    } else {
      icicle.config.constrained = true;
      icicle.config.levelsToShow = index;
    }
    icicle.refresh();
  });*/
	
}

//end



$( window ).resize(function() {
	wa = window.innerWidth;
	 icicle.canvas.resize(wa, 600);
		 wa = window.innerWidth;
	/*
	$( window ).ready(function() {
	wa = window.innerWidth;
	
	});
	var w = window.innerWidth;
	console.log(w);
    var a = w - wa;
	wa = w;
	$("#infovis-canvaswidget").css( "width", w );
	$("#infovis-canvas").css( "width", w );
	for (i=0;i<400;i++){
		var test = "#node"+i;
		var current = $(test).width();
		var final = current+a;
		$(test).css( "width", (w/2) );
		position = null;
		var position = $(test).position();
		if (position!=null){
		$(test).css( "left", (position.left+(a/2)));
			//console.log("test:"+test+" pisition final:"+(position.left+(a/2))+" position:"+position.left+" a:"+a);
		}
		//$(test).css( "width", current+a );
	}
	
	//init();
	//$("#infovis-canvas").not(':first').remove();
	
	*/
});
