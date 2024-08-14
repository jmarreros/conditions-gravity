<?php

namespace dcms\condgravity\includes;

class Process {

	public function __construct() {
		// Condición para campos de CNAE
		add_filter( 'gform_validation', [ $this, 'custom_validation_cnae_1' ] );
		add_filter( 'gform_validation', [ $this, 'custom_validation_cnae_2' ] );
	}


	// Validate certain fields page 1
	public function custom_validation_cnae_1( $validation_result ) {
		$field_type_number  = 142;
		$field_cenae_number = 21;

		return $this->validate_cnae_field( $validation_result, $field_type_number, $field_cenae_number );
	}

	// Validate certain fields page 2
	public function custom_validation_cnae_2( $validation_result ) {
		$field_type_number  = 143;
		$field_cenae_number = 37;

		return $this->validate_cnae_field( $validation_result, $field_type_number, $field_cenae_number );
	}

	private function validate_cnae_field( $validation_result, $field_type_number, $field_cenae_number ): array {
		$form = $validation_result['form'];

		if ( rgpost( 'input_' . $field_cenae_number ) === '' && rgpost( 'input_' . $field_type_number ) === 'Empresa' ) {
			$validation_result['is_valid'] = false;

			foreach ( $form['fields'] as &$field ) {
				if ( $field->id == $field_cenae_number ) {
					$field->failed_validation  = true;
					$field->validation_message = 'Se requiere CNAE si es empresa';
					break;
				}
			}
		}

		$validation_result['form'] = $form;

		return $validation_result;
	}
}
