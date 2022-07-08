package com.alexandruleonte.retete.storage;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

@ConfigurationProperties("storage")
@Service
public class StorageProperties {

	/**
	 * Folder location for storing files
	 */
	@Value("${file-uploads}")
	private String location;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}