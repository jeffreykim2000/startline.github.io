import data from "./language.js";

function updateContent(language) {
  document.getElementById("nav1").textContent = data[language].nav1;
  document.getElementById("nav2").textContent = data[language].nav2;
  document.getElementById("nav3").textContent = data[language].nav3;
  document.getElementById("nav4").textContent = data[language].nav4;
  document.getElementById("nav5").textContent = data[language].nav5;
  document.getElementById("nav6").textContent = data[language].nav6;
  document.getElementById("nav7").textContent = data[language].nav7;
  document.getElementById("problem_1").textContent = data[language].problem_1;
  document.getElementById("problem_title_1").textContent = data[language].problem_title_1;
  document.getElementById("problem_topic_low_outreach").textContent = data[language].problem_topic_low_outreach;

  document.getElementById("lets_fix").textContent = data[language].lets_fix;
  document.getElementById("solution").textContent = data[language].solution;
  document.getElementById("solution_title").textContent = data[language].solution_title;
  document.getElementById("solution_startup_slogan").textContent = data[language].solution_startup_slogan;
  document.getElementById("solution_startup_content").textContent = data[language].solution_startup_content;
  document.getElementById("solution_corporate_slogan").textContent = data[language].solution_corporate_slogan;
  document.getElementById("solution_corporate_content").textContent = data[language].solution_corporate_content;
  document.getElementById("try_startline").textContent = data[language].try_startline;
  document.getElementById("how_it_works").textContent = data[language].how_it_works;
  document.getElementById("how_it_works_slogan_1").textContent = data[language].how_it_works_slogan_1;
  document.getElementById("how_it_works_content_1").textContent = data[language].how_it_works_content_1;
  document.getElementById("how_it_works_option_1").textContent = data[language].how_it_works_option_1;
  document.getElementById("how_it_works_option_content_1").textContent = data[language].how_it_works_option_content_1;
  document.getElementById("how_it_works_option_2").textContent = data[language].how_it_works_option_2;
  document.getElementById("how_it_works_option_content_2").textContent = data[language].how_it_works_option_content_2;
  document.getElementById("how_it_works_option_3").textContent = data[language].how_it_works_option_3;
  document.getElementById("how_it_works_option_content_3").textContent = data[language].how_it_works_option_content_3;
  document.getElementById("how_it_works_slogan_2").textContent = data[language].how_it_works_slogan_2;
  document.getElementById("how_it_works_content_2").textContent = data[language].how_it_works_content_2;
  document.getElementById("how_it_works_1").textContent = data[language].how_it_works_1;

  document.getElementById("how_it_works_title_integrate_data").textContent = data[language].how_it_works_title_integrate_data;
  document.getElementById("how_it_works_content_integrate_data").textContent = data[language].how_it_works_content_integrate_data;
  document.getElementById("how_it_works_title_processing_data").textContent = data[language].how_it_works_title_processing_data;
  document.getElementById("how_it_works_content_processing_data").textContent = data[language].how_it_works_content_processing_data;
  document.getElementById("how_it_works_title_creating_insights").textContent = data[language].how_it_works_title_creating_insights;
  document.getElementById("how_it_works_content_creating_insights").textContent = data[language].how_it_works_content_creating_insights;

  document.getElementById("how_it_works_title_integrate_data_1").textContent = data[language].how_it_works_title_integrate_data_1;
  document.getElementById("how_it_works_content_integrate_data_1").textContent = data[language].how_it_works_content_integrate_data_1;
  document.getElementById("how_it_works_title_processing_data_1").textContent = data[language].how_it_works_title_processing_data_1;
  document.getElementById("how_it_works_content_processing_data_1").textContent = data[language].how_it_works_content_processing_data_1;
  document.getElementById("how_it_works_title_creating_insights_1").textContent = data[language].how_it_works_title_creating_insights_1;
  document.getElementById("how_it_works_content_creating_insights_1").textContent = data[language].how_it_works_content_creating_insights_1;

  document.getElementById("how_it_works_title_integrate_data_2").textContent = data[language].how_it_works_title_integrate_data_2;
  document.getElementById("how_it_works_content_integrate_data_2").textContent = data[language].how_it_works_content_integrate_data_2;
  document.getElementById("how_it_works_title_processing_data_2").textContent = data[language].how_it_works_title_processing_data_2;
  document.getElementById("how_it_works_content_processing_data_2").textContent = data[language].how_it_works_content_processing_data_2;
  document.getElementById("how_it_works_title_creating_insights_2").textContent = data[language].how_it_works_title_creating_insights_2;
  document.getElementById("how_it_works_content_creating_insights_2").textContent = data[language].how_it_works_content_creating_insights_2;

  document.getElementById("how_it_works_slogan_3").textContent = data[language].how_it_works_slogan_3;
  document.getElementById("why_startline_title_exceptional_data_quality").textContent =
    data[language].why_startline_title_exceptional_data_quality;
  document.getElementById("why_startline_content_exceptional_data_quality").textContent =
    data[language].why_startline_content_exceptional_data_quality;
  document.getElementById("why_startline_title_indepth_data").textContent = data[language].why_startline_title_indepth_data;
  document.getElementById("why_startline_content_indepth_data").textContent = data[language].why_startline_content_indepth_data;
  document.getElementById("why_startline_title_extensive_access").textContent = data[language].why_startline_title_extensive_access;
  document.getElementById("why_startline_content_extensive_acess").textContent = data[language].why_startline_content_extensive_acess;
  document.getElementById("why_startline_title_efficiency").textContent = data[language].why_startline_title_efficiency;
  document.getElementById("why_startline_content_efficiency").textContent = data[language].why_startline_content_efficiency;
  document.getElementById("why_startline_title_complete_solution").textContent = data[language].why_startline_title_complete_solution;
  document.getElementById("why_startline_content_complete_solution").textContent = data[language].why_startline_content_complete_solution;
  document.getElementById("why_startline_title_fully_automated").textContent = data[language].why_startline_title_fully_automated;
  document.getElementById("why_startline_content_fully_automated").textContent = data[language].why_startline_content_fully_automated;

  document.getElementById("problem_content_low_outreach").textContent = data[language].problem_content_low_outreach;
  document.getElementById("problem_topic_data_inaccuracy").textContent = data[language].problem_topic_data_inaccuracy;
  document.getElementById("problem_content_data_inaccuracy").textContent = data[language].problem_content_data_inaccuracy;
  document.getElementById("problem_topic_complex_engagement").textContent = data[language].problem_topic_complex_engagement;
  document.getElementById("problem_content_complex_engagement").textContent = data[language].problem_content_complex_engagement;
  document.getElementById("problem_topic_lack_of_manpower").textContent = data[language].problem_topic_lack_of_manpower;
  document.getElementById("problem_content_lack_of_manpower").textContent = data[language].problem_content_lack_of_manpower;
  document.getElementById("problem_topic_poor_visualization").textContent = data[language].problem_topic_poor_visualization;
  document.getElementById("problem_content_poor_visualization").textContent = data[language].problem_content_poor_visualization;
}

document.getElementById("switchToEnglish").addEventListener("click", () => updateContent("en"));
document.getElementById("switchToKorean").addEventListener("click", () => updateContent("kr"));
