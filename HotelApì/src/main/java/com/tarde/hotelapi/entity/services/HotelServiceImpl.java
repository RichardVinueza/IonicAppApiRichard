package com.tarde.hotelapi.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tarde.hotelapi.entity.dao.IHotelDao;
import com.tarde.hotelapi.entity.models.Hotel;

@Service
public class HotelServiceImpl implements IHotelService {

	@Autowired
	private IHotelDao hotelDao;
	
	@Override
	public List<Hotel> getAllHotels() {
		return (List<Hotel>) hotelDao.findAll();
	}


	@Override
	public void delete(long id) {
		hotelDao.deleteById(id);
	}

	@Override
	public void put(Hotel hotel, long id) {
		hotelDao.findById(id).ifPresent((x)->{
			hotel.setIdRoom(id);
			hotelDao.save(hotel);
		hotelDao.save(hotel);
		
		});
		
	}

	@Override
	public Hotel getOneHotel(long id) {
		return hotelDao.findById(id).get();
	}


	@Override
	public void addHotel(Hotel hotel) {
		hotelDao.save(hotel);
		
	}
	
	


	

}
