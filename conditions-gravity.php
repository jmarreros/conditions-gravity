<?php
/*
Plugin Name: Conditions Gravity
Plugin URI: https://decodecms.com
Description: Plugin que agrega condiciones varias al formulario de Gravity Forms
Version: 1.0
Author: Webservi
Author URI: https://webservi.es
Text Domain: condgravity
Domain Path: languages
License: GPL-2.0+
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

namespace dcms\condgravity;

use dcms\condgravity\includes\Submenu;
use dcms\condgravity\includes\Enqueue;
use dcms\condgravity\includes\Process;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Plugin class to handle settings constants and loading files
**/
final class Loader{

	// Define all the constants we need
	public function define_constants():void{
		define ('DCMS_CONDGRAVITY_VERSION', '1.0');
		define ('DCMS_CONDGRAVITY_PATH', plugin_dir_path( __FILE__ ));
		define ('DCMS_CONDGRAVITY_URL', plugin_dir_url( __FILE__ ));
		define ('DCMS_CONDGRAVITY_BASE_NAME', plugin_basename( __FILE__ ));
		define ('DCMS_CONDGRAVITY_SUBMENU', 'tools.php');
	}

	// Load all the files we need
	public function load_includes():void{
		include_once ( DCMS_CONDGRAVITY_PATH . '/helpers/helper.php');
		include_once ( DCMS_CONDGRAVITY_PATH . '/includes/submenu.php');
		include_once ( DCMS_CONDGRAVITY_PATH . '/includes/enqueue.php');
		include_once ( DCMS_CONDGRAVITY_PATH . '/includes/process.php');
	}

	// Load tex domain
	public function load_domain():void{
		add_action('plugins_loaded', function(){
			$path_languages = dirname(DCMS_CONDGRAVITY_BASE_NAME).'/languages/';
			load_plugin_textdomain('condgravity', false, $path_languages );
		});
	}

	// Add link to plugin list
	public function add_link_plugin():void{
		add_action( 'plugin_action_links_' . plugin_basename( __FILE__ ), function( $links ){
			return array_merge( array(
				'<a href="' . esc_url( admin_url( DCMS_CONDGRAVITY_SUBMENU . '?page=condgravity' ) ) . '">' . __( 'Settings', 'condgravity' ) . '</a>'
			), $links );
		} );
	}

	// Initialize all
	public function init():void{
		$this->define_constants();
		$this->load_includes();
		$this->load_domain();
		$this->add_link_plugin();
		new SubMenu();
		new Enqueue();
		new Process();
	}

}

$dcms_process = new Loader();
$dcms_process->init();


