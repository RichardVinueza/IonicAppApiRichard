package com.tarde.hotelapi.entity.services;

import java.util.List;

import com.tarde.hotelapi.entity.models.Hotel;

public interface IHotelService {
	public List<Hotel> getAllHotels();
	public void delete(long id);
	public void put(Hotel hotel, long id);
	public Hotel getOneHotel(long id);
	public void addHotel(Hotel hotel);


}
