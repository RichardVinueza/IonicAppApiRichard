package com.tarde.hotelapi.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity(name = "rooms")
public class Hotel implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Column(name = "id_room")
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idRoom;
	
	@Column(name = "number_room")
	@NotNull
	private long numberRoom;
	
	@NotNull
	@Column
	private double price;
	
	@NotEmpty
	@Column
	private String state;

	public Hotel() {
		
	}

	public Hotel(@NotNull long idRoom, @NotNull long numberRoom, @NotNull double price, @NotEmpty String state) {
		super();
		this.idRoom = idRoom;
		this.numberRoom = numberRoom;
		this.price = price;
		this.state = state;
	}

	public long getIdRoom() {
		return idRoom;
	}

	public void setIdRoom(long idRoom) {
		this.idRoom = idRoom;
	}

	public long getNumberRoom() {
		return numberRoom;
	}

	public void setNumberRoom(long numberRoom) {
		this.numberRoom = numberRoom;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	
	


	
}
