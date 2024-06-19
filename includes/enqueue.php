<?php

namespace dcms\condgravity\includes;

class Enqueue {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
	}

	// Register scripts frontend
	public function register_scripts(): void {
		wp_register_style( 'cond-gravity-style', DCMS_CONDGRAVITY_URL . 'assets/style.css', [], DCMS_CONDGRAVITY_VERSION );
		wp_register_script( 'cond-gravity-script', DCMS_CONDGRAVITY_URL . 'assets/script.js', [ 'jquery' ], DCMS_CONDGRAVITY_VERSION, true );

		wp_localize_script( 'cond-gravity-script',
			'condgravity_var',
			[
				'ajaxurl'         => admin_url( 'admin-ajax.php' ),
				'nonce'           => wp_create_nonce( 'ajax-cp-nonce' ),
			] );

		wp_enqueue_style( 'cond-gravity-style' );
		wp_enqueue_script( 'cond-gravity-script' );
	}
}