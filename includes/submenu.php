<?php

namespace dcms\condgravity\includes;

/**
 * Class for creating a dashboard submenu
 */
class Submenu {
	// Constructor
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'register_submenu' ] );
	}

	// Register submenu
	public function register_submenu(): void {
		add_submenu_page(
			DCMS_CONDGRAVITY_SUBMENU,
			__( 'Condiciones Formulario Gravity', 'condgravity' ),
			__( 'Condiciones Formulario Gravity', 'condgravity' ),
			'manage_options',
			'condgravity',
			[ $this, 'submenu_page_callback' ]
		);
	}

	// Callback, show view
	public function submenu_page_callback(): void {
		include_once( DCMS_CONDGRAVITY_PATH . '/views/main-screen.php' );
	}
}