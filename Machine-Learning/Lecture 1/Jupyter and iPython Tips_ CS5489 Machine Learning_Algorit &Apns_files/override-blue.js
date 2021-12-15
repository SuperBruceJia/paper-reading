var BLUE_CANVAS_SETUP={connectorUrl:"https://onlinesurvey.cityu.edu.hk/BlueConnectorInstance/",canvasAPI:"https://canvas.cityu.edu.hk",domainName:"com.explorance",consumerID:"uneAb3wY2QaWRG4D4S117w==",defaultLanguage:"en-us"},BlueCanvasJS=document.createElement("script");BlueCanvasJS.setAttribute("type","text/javascript");BlueCanvasJS.setAttribute("src","https://onlinesurvey.cityu.edu.hk/BlueConnectorInstance//Scripts/Canvas/BlueCanvas.min.js");document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);

/*
Blackboard Ally
===================== not used =====================
window.ALLY_CFG = {
    'baseUrl': 'https://prod-ap-southeast-1.ally.ac',
    'clientId': 2
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');
*/

/*
 City University of Hong Kong
 Canvas Override JS
 */

const EXECUTION_MODE_DEVELOPMENT = "development";
const EXECUTION_MODE_PRODUCTION = "production";
var _execution_mode = EXECUTION_MODE_DEVELOPMENT;

// redirect away from ldap login page
if (window.location.href == "https://canvas.cityu.edu.hk/login/ldap")
{
	window.location.replace ("https://canvas.cityu.edu.hk");
}




/*
 Environment for CityU objects
 */
Object.assign(ENV,{})





// self-enroll course for Grammarly
if (window.location.href == "https://canvas.cityu.edu.hk/enroll/PB8MWK?enrolled=1")
{
	window.location.replace ("https://canvas.cityu.edu.hk/courses/23372");
}
if (window.location.href == "https://canvas.cityu.edu.hk/courses/23372")
{
	$("a").remove(".self_unenrollment_link");
}





// google analytics
(function (i, s, o, g, r, a, m)
{
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function ()
		{
			(i[r].q = i[r].q || []).push (arguments)
		}, i[r].l = 1 * new Date ();
	a = s.createElement (o),
		m = s.getElementsByTagName (o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore (a, m)
}) (window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga ('create', 'UA-71527761-1', 'auto');

if (ENV ['current_user_id'] != null)
{
	ga ('set', 'userId', ENV ['current_user_id']);
	ga ('set', 'dimension1', ENV ['current_user_id']);
}

ga ('send', 'pageview');

// roles flag
var _is_admin = false;

check_user_roles ();

/*
 Check user roles
 */
function check_user_roles ()
{
	var t_roles_array = ENV ["current_user_roles"];

	if (t_roles_array != null)
	{
		if (t_roles_array.indexOf ("admin") != -1)
		{
			_is_admin = true;
		}
	}
}

/*
 Console log
 */
function console_log (p_message)
{
	if (_execution_mode == EXECUTION_MODE_DEVELOPMENT)
	{
		console.log (p_message);
	}
}


/*
 On a particular page handler
 */
function h_page (p_regex, p_function)
{
	var t_pathname = location.pathname;

	console_log ("h_page " + t_pathname);

	if (t_pathname.match (p_regex))
	{
		p_function ();
	}
}

/*
 Element rendered handler
 */
function h_element_rendered (p_selector, p_function, p_attempt_number)
{
	console_log ("h_element_rendered " + p_selector + " " + p_attempt_number);

	var t_element = $ (p_selector);

	p_attempt_number = ++p_attempt_number || 1;

	// if element found, call function on element
	if (t_element.length)
	{
		return p_function (t_element);
	}

	// stop when reaching 0
	if (p_attempt_number <= 0)
	{
		return;
	}

	p_attempt_number = p_attempt_number - 1;

	setTimeout (h_element_rendered, 250, p_selector, p_function, p_attempt_number);
}

/*
 Peoples page mods
 */
h_page (/\/courses\/\d+\/users/, users_hide_add_options);

/* Hiding add people options in peoples page */
function users_hide_add_options ()
{
	console_log ("users_hide_add_options");

	// check if add people button is rendered
	h_element_rendered ('#addUsers', h_users_add_users_button_rendered, 60);
}

var _is_users_login_id_radio_rendered;

/* Add users button rendered handler */
function h_users_add_users_button_rendered ()
{
	console_log ("h_users_add_users_button_rendered");

	// add on click handler to add users button
	var t_add_users_button = document.getElementById ('addUsers');
	t_add_users_button.onclick = h_add_users_button_click;
}

/* Add users button click handler */
function h_add_users_button_click ()
{
	console_log ("h_add_users_button_click");

	// check if user login id radio rendered
	h_element_rendered ('#peoplesearch_radio_unique_id', h_users_login_id_radio_rendered, 60);
}

/* User login id radio rendered handler */
function h_users_login_id_radio_rendered ()
{
	console_log ("h_users_login_id_radio_rendered");

	const USERS_LOGIN_ID_RADIO = "#peoplesearch_radio_unique_id";

	$ (USERS_LOGIN_ID_RADIO).click ();
}

/*
 Courses page mods
 */
h_page (/\/courses$/, courses_rename_browse_courses);

/* Rename "Browse more courses" in courses page */
function courses_rename_browse_courses ()
{
	console_log ("courses_rename_browse_courses");

	const COURSES_BROWSE_MORE_ELEMENT = "#content a[href='/search/all_courses/']";
	const COURSES_BROWSE_MORE_TEXT_MOD = "Self-Access Course List";

	$ (COURSES_BROWSE_MORE_ELEMENT).text (COURSES_BROWSE_MORE_TEXT_MOD);
}

/*
 Courses settings mods
 */
h_page (/\/courses\/\d+\/settings$/, courses_settings_mod);

function courses_settings_mod ()
{
	console_log ("courses_settings_mod");

	if (_is_admin == false)
	{
		courses_settings_remove_delete_conclude ();
		courses_settings_remove_public_visibility ();
		courses_settings_remove_more_options ();
	}

	course_settings_move_commons_to_end ();
}

/* Remove "Permanently Delete" and "Conclude" course */
function courses_settings_remove_delete_conclude ()
{
	console_log ("courses_settings_remove_delete_conclude");

	const COURSES_SETTINGS_CONCLUDE_COURSE_ELEMENT = "#right-side a[href$='event=conclude']";
	const COURSES_SETTINGS_DELETE_COURSE_ELEMENT = "#right-side a[href$='event=delete']";

	$ (COURSES_SETTINGS_CONCLUDE_COURSE_ELEMENT).hide ();
	$ (COURSES_SETTINGS_DELETE_COURSE_ELEMENT).hide ();
}

/* Remove public visibility options */
function courses_settings_remove_public_visibility ()
{
	console_log ("courses_settings_remove_public_visibility");

	const COURSES_SETTINGS_VISIBILITY_SELECT = "#course_visibility #course_course_visibility";
	const COURSES_SETTINGS_VISIBILITY_CUSTOM_INPUT = "#course_visibility #course_custom_course_visibility";
	const COURSES_SETTINGS_VISIBILITY_INDEXED_INPUT = "#course_visibility #course_indexed";
	const COURSES_SETTINGS_VISIBILITY_BR = "#course_visibility br";

	$ (COURSES_SETTINGS_VISIBILITY_SELECT).parent ().hide ();
	$ (COURSES_SETTINGS_VISIBILITY_CUSTOM_INPUT).parent ().hide ();
	$ (COURSES_SETTINGS_VISIBILITY_INDEXED_INPUT).parent ().hide ();
	$ (COURSES_SETTINGS_VISIBILITY_BR).hide ();
}

/* Remove some items in more options */
function courses_settings_remove_more_options ()
{
	console_log ("courses_settings_remove_more_options");

	const COURSES_SETTINGS_SELF_ENROLLMENT = "#course_self_enrollment";
	const COURSES_SETTINGS_SELF_ENROLLMENT_LABEL = ".course_form_more_options label[for='course_self_enrollment']";

	// don't try to manipulate open_enrollment_holder as that is controlled by the previous checkbox
	// that will override this JS hidden
	const COURSES_SETTINGS_OPEN_ENROLLMENT = "#course_open_enrollment";
	const COURSES_SETTINGS_OPEN_ENROLLMENT_LABEL = ".course_form_more_options label[for='course_open_enrollment']";

	$ (COURSES_SETTINGS_SELF_ENROLLMENT).hide ();
	$ (COURSES_SETTINGS_SELF_ENROLLMENT_LABEL).hide ();
	$ (COURSES_SETTINGS_OPEN_ENROLLMENT).hide ();
	$ (COURSES_SETTINGS_OPEN_ENROLLMENT_LABEL).hide ();
}

/* Move Canvas Commons to the end of the list */
function course_settings_move_commons_to_end ()
{
	console_log ("course_settings_move_commons_to_end");

	const COURSES_SETTINGS_RIGHT_SIDE_SUMMARY_ELEMENT = "#right-side table.summary";
	const COURSES_SETTINGS_RIGHT_SIDE_CANVAS_COMMONS_ELEMENT = "#right-side a:contains('Commons')";

	$ (COURSES_SETTINGS_RIGHT_SIDE_SUMMARY_ELEMENT).before ($ (COURSES_SETTINGS_RIGHT_SIDE_CANVAS_COMMONS_ELEMENT));
}

/*
 New assignment mods
 */
h_page (/\/courses\/\d+\/assignments\/new$/, assignment_new_mod);

function assignment_new_mod ()
{
	assignment_new_edit_add_turnitin_guide_link ();
	assignment_new_hide_turnitin_api ();
	// assignment_new_hide_external_moderated ();
}

/* add turnitin guide link */
function assignment_new_edit_add_turnitin_guide_link ()
{
	console_log ("assignment_new_add_turnitin_guide_link");

	const ASSIGNMENT_NEW_ONLINE_SUBMISSION_TYPES_DIV = "#assignment_online_submission_types";

	h_element_rendered (ASSIGNMENT_NEW_ONLINE_SUBMISSION_TYPES_DIV,
	                    function (el)
	                    {
		                    $ (ASSIGNMENT_NEW_ONLINE_SUBMISSION_TYPES_DIV).append (
			                    '<div class="subtitle"><i class="icon-info"></i> <a href="https://www.cityu.edu.hk/elearn/elearn_ins_canvas-turnitin-create.html" target="_blank" style="font-weight: normal;">How to create Turnitin Assignment?</a> </div>');
	                    }
	);
}

/* Hide Turnitin API */
function assignment_new_hide_turnitin_api ()
{
	console_log ("assignment_new_hide_turnitin_api");

	const ASSIGNMENT_NEW_TURNITIN_LABEL = "#assignment_online_submission_types label[for='assignment_turnitin_enabled']";
	const ASSIGNMENT_NEW_TURNITIN_CHECKBOX = "#assignment_turnitin_enabled";
	const ASSIGNMENT_NEW_TURNITIN_ADVANCED_LINK = "#advanced_turnitin_settings_link";

	h_element_rendered (ASSIGNMENT_NEW_TURNITIN_CHECKBOX,
	                    function (el)
	                    {
		                    $ (ASSIGNMENT_NEW_TURNITIN_LABEL).hide ();
		                    $ (ASSIGNMENT_NEW_TURNITIN_CHECKBOX).hide ();
		                    $ (ASSIGNMENT_NEW_TURNITIN_ADVANCED_LINK).hide ();
	                    }
	);
}

/* (not used) Hide moderated grading for external tool
function assignment_new_hide_external_moderated ()
{
	console_log ("assignment_new_hide_external_moderated");

	const ASSIGNMENT_NEW_SUBMISSION_TYPE_SELECT = "#assignment_submission_type";
	const ASSIGNMENT_NEW_MODERATED_CHECKBOX = "#assignment_moderated_grading";

	h_element_rendered (ASSIGNMENT_NEW_SUBMISSION_TYPE_SELECT,
	                    function (el)
	                    {
		                    $ (ASSIGNMENT_NEW_SUBMISSION_TYPE_SELECT).change (
			                    function ()
			                    {
				                    var t_moderated_fieldset = $ (
					                    ASSIGNMENT_NEW_MODERATED_CHECKBOX).parent ().parent ().parent ();

				                    if (t_moderated_fieldset.is ('fieldset'))
				                    {
					                    if ($ (ASSIGNMENT_NEW_SUBMISSION_TYPE_SELECT).val () ==
					                        'external_tool')
					                    {
						                    $ (ASSIGNMENT_NEW_MODERATED_CHECKBOX).attr (
							                    'checked',
							                    false);
						                    t_moderated_fieldset.hide ();
					                    }
					                    else
					                    {
						                    t_moderated_fieldset.show ();
					                    }
				                    }
			                    }
		                    );

		                    // execute one time to prevent external tool being selected at the first place
		                    $ (ASSIGNMENT_NEW_SUBMISSION_TYPE_SELECT).change ();
	                    }
	);
} */

/*
 Edit assignment mods
 */
h_page (/\/courses\/\d+\/assignments\/\d+\/edit$/, assignment_edit_mod);

function assignment_edit_mod ()
{
	assignment_new_edit_add_turnitin_guide_link ();
	assignment_edit_hide_turnitin_api ();
	// assignment_edit_hide_external_moderated ();
	// new_quizzes_edit_rename_button ();
}

/* Hide Turnitin API */
function assignment_edit_hide_turnitin_api ()
{
	console_log ("assignment_edit_hide_turnitin_api");

	const ASSIGNMENT_EDIT_TURNITIN_LABEL = "#assignment_online_submission_types label[for='assignment_turnitin_enabled']";
	const ASSIGNMENT_EDIT_TURNITIN_CHECKBOX = "#assignment_turnitin_enabled";

	h_element_rendered (ASSIGNMENT_EDIT_TURNITIN_CHECKBOX,
	                    function (el)
	                    {
		                    // disable changes if using Turnitin API
		                    if ($ (ASSIGNMENT_EDIT_TURNITIN_CHECKBOX).is (":checked") == true)
		                    {
			                    $ (ASSIGNMENT_EDIT_TURNITIN_CHECKBOX).prop ("disabled", true)
		                    }
		                    // hide it if not using
		                    else
		                    {
			                    $ (ASSIGNMENT_EDIT_TURNITIN_LABEL).hide ();
			                    $ (ASSIGNMENT_EDIT_TURNITIN_CHECKBOX).hide ();
		                    }
	                    }
	);
}

/* (not used) Hide moderated grading for external tool
function assignment_edit_hide_external_moderated ()
{
	console_log ("assignment_edit_hide_external_moderated");

	const ASSIGNMENT_EDIT_SUBMISSION_TYPE_SELECT = "#assignment_submission_type";
	const ASSIGNMENT_EDIT_MODERATED_CHECKBOX = "#assignment_moderated_grading";

	h_element_rendered (ASSIGNMENT_EDIT_SUBMISSION_TYPE_SELECT,
	                    function (el)
	                    {
		                    $ (ASSIGNMENT_EDIT_SUBMISSION_TYPE_SELECT).change (
			                    function ()
			                    {
				                    // do only if moderated checkbox is not selected
				                    if ($ (ASSIGNMENT_EDIT_MODERATED_CHECKBOX).is (":checked") == false)
				                    {
					                    var t_moderated_fieldset = $ (
						                    ASSIGNMENT_EDIT_MODERATED_CHECKBOX).parent ().parent ().parent ();

					                    if (t_moderated_fieldset.is ('fieldset'))
					                    {
						                    if ($ (ASSIGNMENT_EDIT_SUBMISSION_TYPE_SELECT).val () ==
						                        'external_tool')
						                    {
							                    $ (ASSIGNMENT_EDIT_MODERATED_CHECKBOX).attr (
								                    'checked',
								                    false);
							                    t_moderated_fieldset.hide ();
						                    }
						                    else
						                    {
							                    t_moderated_fieldset.show ();
						                    }
					                    }
				                    }
			                    }
		                    );

		                    // execute one time to prevent external tool being selected at the first place
		                    $ (ASSIGNMENT_EDIT_SUBMISSION_TYPE_SELECT).change ();
	                    }
	);
} */

/* (not used) Rename save New Quizzes label
function new_quizzes_edit_rename_button ()
{
	console_log ("new_quizzes_edit_rename_button");

	const NEWQUIZZES_CREATE_SAVE_BUTTON = "button:contains('Save')[type='submit']";
	const NEWQUIZZES_EXTERNAL_LINK_URL = "#assignment_external_tool_tag_attributes_url"

	h_element_rendered (NEWQUIZZES_CREATE_SAVE_BUTTON,
	                    function (el)
	                    {
		                    if ($(NEWQUIZZES_EXTERNAL_LINK_URL).val().indexOf('quiz-lti-sin') >= 0)
							{
								$ (NEWQUIZZES_CREATE_SAVE_BUTTON).attr ("data-text-while-loading",
		                                                             "Save & Next...");
		                    	$ (NEWQUIZZES_CREATE_SAVE_BUTTON).html ("Save & Next");
							}
	                    }
	)
}
 */







/*
 Create announcement mods
 */
h_page (/\/courses\/\d+\/discussion_topics\/new$/, pre_announcement_create_rename_button);

/*
 Rename create announcement button label
 */
function pre_announcement_create_rename_button ()
{
	if (location.search.search ("is_announcement=true") != -1)
	{
		announcement_create_rename_button ();
	}
}

function announcement_create_rename_button ()
{
	console_log ("announcement_create_rename_button");

	const ANNOUCEMENT_CREATE_SAVE_BUTTON = "button:contains('Save')[type='submit']";

	h_element_rendered (ANNOUCEMENT_CREATE_SAVE_BUTTON,
	                    function (el)
	                    {
		                    $ (ANNOUCEMENT_CREATE_SAVE_BUTTON).attr ("data-text-while-loading",
		                                                             "Publishing...");
		                    $ (ANNOUCEMENT_CREATE_SAVE_BUTTON).html ("Publish");
	                    }
	)
}

/*
 gradebook mods
 */
// this is not used as it is unstable when the student list is very long
// h_page (/\/courses\/\d+\/gradebook$/, gradebook_rename_secondary_id);

/*
 rename secondary id as cityu eid

function gradebook_rename_secondary_id ()
{
	console_log ("gradebook_rename_secondary_id");

	const GRADEBOOK_FILTER_INPUT = "#gradebook-filter-input";
	const GRADEBOOK_GRID_SECONDARY_ID_SPAN = "span:contains('Secondary ID')";

	h_element_rendered (GRADEBOOK_FILTER_INPUT,
	                    function (el)
	                    {
		                    $ (GRADEBOOK_FILTER_INPUT).attr ('placeholder',
		                                                     'Filter by student name or CityU EID');
		                    $ (GRADEBOOK_GRID_SECONDARY_ID_SPAN) [0].textContent = 'CityU EID';
	                    }
	)
}
 */







/*
 Create / Edit quiz mode
 */


h_page (/\/courses\/\d+\/quizzes\/\d+\/edit$/, quiz_edit_mod);

function quiz_edit_mod ()
{
	quiz_lockdown_browser_message ();
}


/* add LockDown Browser message */
function quiz_lockdown_browser_message ()
{
	console_log ("lockdown_browser_message_link");

	const LOCKDOWN_BROWSER_MESSAGE_DIV = "#lockdown_browser_suboptions";

	h_element_rendered (LOCKDOWN_BROWSER_MESSAGE_DIV,
	                    function (el)
	                    {
		                    $ (LOCKDOWN_BROWSER_MESSAGE_DIV).append (
		                    	'<span style="color: #bf165e;">The use of Respondus LockDown Browser and Respondus Monitor is under trial. Please contact the e-Learning Team (<a href="mailto:elearn@cityu.edu.hk?subject=Use of Respondus LockDown Browser">elearn@cityu.edu.hk</a>) if you intend to adopt the Respondus solutions.</span><br><br>');
	                    }
	);
}










/*
 LockDown Browser (launch) mods
 */


h_page (/\/courses\/\d+\/quizzes\/\d+\/lockdown_browser_required$/, lockdown_launch_mod);

function lockdown_launch_mod ()
{
	lockdown_launch_guide_link ();
}



/* add LockDown Browser guide link */
function lockdown_launch_guide_link ()
{
	console_log ("lockdown_launch_guide_link");

	const LOCKDOWN_REQUIRED_DIV = "#content";

	h_element_rendered (LOCKDOWN_REQUIRED_DIV,
	                    function (el)
	                    {
		                    $ (LOCKDOWN_REQUIRED_DIV).append (
		                    	'<br><br><div style="width: 80%; border: 1px #333333 solid; margin: auto; padding: 10px; color: #333333;"><p>Download and install LockDown Browser from this link:</p><p><a href="https://download.respondus.com/lockdown/download.php?id=997146130">https://download.respondus.com/lockdown/download.php?id=997146130</a></p><p style="color: #d54085;">(LockDown Browser is only available on Windows and Mac OS)</p><br><br><p>After installation,</p><ul><li>Windows:<br>double-click the <strong>LockDown Browser</strong> icon on the desktop, or<br>go to "Start" &gt; locate "All Programs" &gt; click <strong>Respondus</strong> &gt;  click <strong>LockDown Browser</strong><br><br></li><li>Mac OS:<br>open <strong>Applications</strong> folder &gt; click the <strong>LockDown Browser</strong> icon</li></ul></div>');
	                    }
	);
}










/*
 Import Content mods
 */


h_page (/\/courses\/\d+\/content_migrations$/, content_migrations_mod);

function content_migrations_mod ()
{
	content_migrations_guide ();
}



/* add Import Content guide */
function content_migrations_guide ()
{
	console_log ("content_migrations_guide");

	const IMPORT_RECOMMENDATION_DIV = "#content";

	h_element_rendered (IMPORT_RECOMMENDATION_DIV,
	                    function (el)
	                    {
		                    $ (IMPORT_RECOMMENDATION_DIV).append (
		                    	'<div style="width: 80%; margin: auto; background-color: #f2ede0; -moz-box-shadow: 6px 6px 0px #e0d8d2; -webkit-box-shadow: 6px 6px 0px #e0d8d2; box-shadow: 6px 6px 0px #e0d8d2; padding: 15px; border: #b5a295 solid 2px; clear:both;"><h3 style="text-align: center; font-style: italic; color: #bf165e;">Notice about content import from previous course</h3><p>Starting Semester A 2021/22, all new Canvas courses have the updated settings (more details: <a href="https://www.cityu.edu.hk/elearn/elearn_ins_canvas-newcourse-defaultsettings.html" target="_blank">Default settings of new Canvas courses</a>).</p><p>"Import Course Content" may <span style="color: #bf165e;">overwrite the new settings</span>. After copying content from a previous Canvas course, please check those settings and update according to your preference in the destination Canvas course.</p></div>');
	                    }
	);
}





















/*
 Zoom disclaimer starts here
 */


const COOKIE_ZOOM_ACCEPTED = 'is_zoom_accepted';

// zoom a link
const JQ_ZOOM_A_LINK = "a[href*='external_tools']:contains('Zoom')";
var zoom_a_link_href;

// zoom disclaimer div
const DIV_ZOOM_DISCLAIMER = 'zoom_disclaimer';
const JQ_ZOOM_DISCLAIMER = '#' + DIV_ZOOM_DISCLAIMER;
	
// applies to all courses, for production use
h_page (/\/courses\/\d+/, zoom_disclaimer);

// set cookie
function set_cookie (p_name, p_value, p_exp_days)
{
	const ONE_DAY_IN_MS = 86400000;	

	var t_exp_date = new Date ();
	t_exp_date.setTime (t_exp_date.getTime () + (p_exp_days * ONE_DAY_IN_MS));
		
	var t_cookie = p_name + '=' + p_value + '; ';
	var t_expires = 'expires=' + t_exp_date.toUTCString () + '; ';
	var t_cookie_full = t_cookie + t_expires;

	document.cookie = t_cookie_full;
}

// get cookie
function get_cookie (p_name)
{
	var t_cookie_array = document.cookie.split ('; ');
	var t_cookie_array_length = t_cookie_array.length;

	for (var i = 0; i < t_cookie_array_length; i++)
	{
		var t_cookie_pair = t_cookie_array [i].split ('=');
			
		var t_cookie_name = t_cookie_pair [0];
		var t_cookie_value = t_cookie_pair [1];

		if (t_cookie_name === p_name)
		{
			return (t_cookie_value);
		}
	}

	return null;
}

// zoom a link clicked handler
function h_zoom_a_link_clicked (p_event)
{
	console_log (arguments.callee.name);

	p_event.preventDefault ();
	$( JQ_ZOOM_DISCLAIMER ).dialog ( "open" );
}

// zoom a link ready handler
function h_zoom_a_link_ready ()
{
	console_log (arguments.callee.name);

	zoom_a_link_href = $( JQ_ZOOM_A_LINK )[0].href;
	$( JQ_ZOOM_A_LINK ).click (h_zoom_a_link_clicked);
}

// zoom disclaimer ready handler
function h_zoom_disclaimer_ready ()
{
	console_log (arguments.callee.name);

	$( JQ_ZOOM_DISCLAIMER ).dialog
	(
		{
			autoOpen: false,
			resizable: false,
			height: "auto",
			width: 500,
			buttons:
			{
				'Agree and continue': function ()
				{
					// as requested by management, cookie logic is disabled
					// 2021-01-07: cookie logic (1 day) is enabled
					set_cookie (COOKIE_ZOOM_ACCEPTED, 'true', 1);

					window.location.href = zoom_a_link_href;

				},
				Cancel: function ()
				{
					console_log ('cancel');
					$( this ).dialog( 'close' );
				}
			}
		}
	);
}

// zoom disclaimer initialisation function
function zoom_disclaimer ()
{
	console_log (arguments.callee.name);

	// only implement if zoom link presents
	if ($( JQ_ZOOM_A_LINK ).length > 0)
	{
		// only implement if cookie is null
		if (get_cookie (COOKIE_ZOOM_ACCEPTED) == null)
		{
			// continue only if jquery ui dialog presents
			//
			// note: sometimes jquery ui dialog will failed to load
			// for example when user is loading the Announcements page
			// should revisit in the future whether such a checking is still necessary
			//
			if (jQuery.ui.dialog)
			{
				// prepare zoom disclaimer popup
				var t_zoom_div = '<div id="' + DIV_ZOOM_DISCLAIMER + '" title="Notes to users"><p>All university members, physical or online, are requested to:</p><ul><li>be civil and respectful to others;</li><li>engage in rational exchange and be law abiding;</li><li>refrain from making attacks on individuals or groups with unfounded allegations, and</li><li>behave politely with no use of abusive or inflammatory language.</li></ul><p>The intellectual property rights of all the course contents, including the downloadable (or otherwise) materials and video recordings, belong to the staff concerned. Sharing of these materials to others without the explicit and prior permission from the owner is considered illegal and strictly prohibited. To prevent illegal sharing, all video recordings are embedded with hidden watermark.</p><p>Violation of the above, including obstruction or disruption of any academic activities, is considered improper and may be deemed as misconduct as laid down in the <a href="https://www.cityu.edu.hk/vpsa/cscdp/" target="_blank">Code of Student Conduct</a>. Students are also reminded to observe the <a href="https://wikisites.cityu.edu.hk/sites/upolicies/itpolicy/" target="_blank">Policies on the Use of IT Services and Resources</a> and the <a href="https://wikisites.cityu.edu.hk/sites/upolicies/ippolicy/Documents/IPPolicy.pdf" target="_blank">University Policy on Intellectual Property</a>.</p></div>';

				// add page to body
				$( t_zoom_div ).appendTo (document.body);

				// zoom a link rendered
				$( JQ_ZOOM_A_LINK ).ready (h_zoom_a_link_ready);
		
				// zoom disclaimer rendered
				$( JQ_ZOOM_DISCLAIMER ).ready (h_zoom_disclaimer_ready);
			}
			else
			{
				// try again later
				console_log ('jquery ui dialog not available');
				setTimeout(() => { zoom_disclaimer (); }, 100);
			}
		}
	}
}



/*
 Zoom disclaimer ends
 */