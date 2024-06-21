<?php

namespace dcms\condgravity\includes;

class Enqueue {
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
	}

	// Register scripts frontend
	public function register_scripts(): void {
		wp_register_style( 'cond-gravity-style', DCMS_CONDGRAVITY_URL . 'assets/style.css', [], DCMS_CONDGRAVITY_VERSION );
		wp_register_script( 'cond-suggestion-gravity-script', DCMS_CONDGRAVITY_URL . 'assets/suggestion.js', [], DCMS_CONDGRAVITY_VERSION, true );

		wp_enqueue_style( 'cond-gravity-style' );
		wp_enqueue_script( 'cond-suggestion-gravity-script' );
	}
}